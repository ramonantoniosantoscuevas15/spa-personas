import { Injectable } from '@angular/core';
import { CategoriaDTO } from './categoriasdto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServices {

  constructor() { }

  public obtenerTodos():CategoriaDTO[]{
    return[{id:1,tipo:'tipo'}]
  }

}
