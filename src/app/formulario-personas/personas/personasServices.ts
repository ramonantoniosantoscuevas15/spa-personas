import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CategoriaPersonadto, CrearpersonaDTO, personaDTO } from './personasdto';

@Injectable({
  providedIn: 'root'
})
export class PersonasServices {

  constructor() { }

  private http = inject(HttpClient)
  private urlbase = environment.apiUrl + '/personas'

  public crearGet(): Observable<CategoriaPersonadto>{
    return this.http.get<CategoriaPersonadto>(`${this.urlbase}/PostCategoria`)
  }

  public crear(persona: CrearpersonaDTO):Observable<personaDTO>{
    const formData = this.construirFormData(persona)
    return this.http.post<personaDTO>(this.urlbase,formData)

  }

  private construirFormData(persona: CrearpersonaDTO):FormData{
    const formData = new FormData()
    formData.append('nombre',persona.nombre)
    formData.append('apellido',persona.apellido)
    formData.append('cedula',JSON.stringify(persona.cedula))
    //formData.append('fechanacimiento',persona.fechanacimiento.toISOString().split('T')[0])
    formData.append('Correos',JSON.stringify(persona.Correos))
    formData.append('Dirrecciones',JSON.stringify(persona.Dirreciones))
    formData.append('Telefonos',JSON.stringify(persona.Telefonos))
    formData.append('categoriasIds', JSON.stringify(persona.categoriasIds))
    return formData
  }

}
