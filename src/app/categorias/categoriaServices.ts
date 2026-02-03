import { inject, Injectable } from '@angular/core';
import { CategoriaDTO, CrearCategoriaDTO } from './categoriasdto';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PaginacionDTO } from '../componentes/models/Paginaciondto';
import { contruirQueryParams } from '../componentes/funciones/queris/construitQueryParams';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServices {
  private http = inject(HttpClient)
  private urlBase = environment.apiUrl + '/categorias'

  // private urlBase = environment.apiUrl + '/categorias'


   constructor() { }


 public obtenerTodos(paginacion: PaginacionDTO): Observable<HttpResponse<CategoriaDTO[]>> {
     let queryparams = contruirQueryParams(paginacion)
     return this.http.get<CategoriaDTO[]>(this.urlBase, { params: queryparams, observe: 'response' })
   }
   public obtenerporid(id: number): Observable<CategoriaDTO> {
     return this.http.get<CategoriaDTO>(`${this.urlBase}/${id}`)
   }

   public actualizar(id: number,categoria: CrearCategoriaDTO){
     return this.http.put(`${this.urlBase}/${id}`,categoria)
   }


   public Crear(categoria: CrearCategoriaDTO) {
     return this.http.post(this.urlBase, categoria)
   }

}
