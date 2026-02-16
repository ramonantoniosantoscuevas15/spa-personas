import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CategoriaPersonadto, CrearpersonaDTO, personaDTO, PersonasPutGetDTO } from './personasdto';
import { PaginacionDTO } from '../../componentes/models/Paginaciondto';
import { contruirQueryParams } from '../../componentes/funciones/queris/construitQueryParams';

@Injectable({
  providedIn: 'root'
})
export class PersonasServices {

  constructor() { }

  private http = inject(HttpClient)
  private urlbase = environment.apiUrl + '/personas'









  public obtenertodos(paginacion: PaginacionDTO): Observable<HttpResponse<personaDTO[]>>{
    let queryparams = contruirQueryParams(paginacion)
    return this.http.get<personaDTO[]>(this.urlbase,{params: queryparams, observe: 'response'})

  }

  public crearGet(): Observable<CategoriaPersonadto>{

    return this.http.get<CategoriaPersonadto>(`${this.urlbase}/PostCategoria`)
  }
  public actualizarGet(id:number):Observable<PersonasPutGetDTO>{
    return this.http.get<PersonasPutGetDTO>(`${this.urlbase}/Putget/${id}`)

  }

  public actualizar(id:number,persona: CrearpersonaDTO){
    return this.http.put(`${this.urlbase}/${id}`,persona)
  }

  public crear(persona: CrearpersonaDTO):Observable<personaDTO>{





    return this.http.post<personaDTO>(this.urlbase,persona)


  }

  private construirFormData(persona: CrearpersonaDTO):FormData{
    const formData = new FormData()
    formData.append('nombre',persona.nombre)
    formData.append('apellido',persona.apellido)
    formData.append('cedula',JSON.stringify(persona.cedula))
    formData.append('fechanacimiento',persona.fechanacimiento.toISOString().split('T')[0])
     formData.append('correos',JSON.stringify(persona.Correos))
     formData.append('tipodirrecion',JSON.stringify(persona.Dirrecciones))
     formData.append('ubicacion',JSON.stringify(persona.Dirrecciones))
     formData.append('ciudad',JSON.stringify(persona.Dirrecciones))
     formData.append('provincia',JSON.stringify(persona.Dirrecciones))
     formData.append('codigopostal',JSON.stringify(persona.Dirrecciones))
     formData.append('pais',JSON.stringify(persona.Dirrecciones))

     formData.append('tiponumero',JSON.stringify(persona.Telefonos))
     formData.append('codigopais',JSON.stringify(persona.Telefonos))
     formData.append('numero',JSON.stringify(persona.Telefonos))


    formData.append('categoriasIds', JSON.stringify(persona.CategoriasId))
    return formData
  }

}
