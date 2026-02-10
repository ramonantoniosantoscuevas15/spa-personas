import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CategoriaPersonadto, CrearpersonaDTO, personaDTO } from './personasdto';
import { PaginacionDTO } from '../../componentes/models/Paginaciondto';
import { contruirQueryParams } from '../../componentes/funciones/queris/construitQueryParams';

@Injectable({
  providedIn: 'root'
})
export class PersonasServices {

  constructor() { }

  private http = inject(HttpClient)
  private urlbase = environment.apiUrl + '/personas'
  private httpOptions = {
  headers: new HttpHeaders({'Content-Type': `${this.urlbase}/json`})
}
  public obtenertodos(paginacion: PaginacionDTO): Observable<HttpResponse<personaDTO[]>>{
    let queryparams = contruirQueryParams(paginacion)
    return this.http.get<personaDTO[]>(this.urlbase,{params: queryparams, observe: 'response'})

  }

  public crearGet(): Observable<CategoriaPersonadto>{
    return this.http.get<CategoriaPersonadto>(`${this.urlbase}/PostCategoria`)
  }

  public crear(persona: CrearpersonaDTO):Observable<personaDTO>{
  //  const formdata = this.construirFormData(persona)


    return this.http.post<personaDTO>(this.urlbase,persona)


  }

  private construirFormData(persona: CrearpersonaDTO):FormData{
    const formData = new FormData()
    formData.append('nombre',persona.nombre)
    formData.append('apellido',persona.apellido)
    formData.append('cedula',JSON.stringify(persona.cedula))
    formData.append('fechanacimiento',persona.fechanacimiento.toISOString().split('T')[0])
     formData.append('correos',JSON.stringify(persona.Correos))
     formData.append('dirreciones',JSON.stringify(persona.Dirrecciones))


     formData.append('telefonos',JSON.stringify(persona.Telefonos))

    formData.append('categoriasIds', JSON.stringify(persona.categoriasIds))
    return formData
  }

}
