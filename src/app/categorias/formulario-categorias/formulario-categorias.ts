import {  Component, inject, Inject } from '@angular/core';
import { Categorias } from "../categorias";
import { CrearCategoriaDTO } from '../categoriasdto';
import { CategoriaServices } from '../categoriaServices';
import { Router, RouterLink } from '@angular/router';
import { extraererrores } from '../../componentes/funciones/extraererrores';
import { MostrarErrores } from "../../componentes/mostrar-errores/mostrar-errores";

@Component({
  selector: 'app-formulario-categorias',
  imports: [Categorias, MostrarErrores],
  templateUrl: './formulario-categorias.html',

})
export class FormularioCategorias {
  private categoriasservice = inject(CategoriaServices)
  private router = inject(Router)
  errores:string[]=[]
  guardarCategoria(categoria: CrearCategoriaDTO){
    this.categoriasservice.Crear(categoria).subscribe({
      next:()=>{
        this.router.navigate(['/indice-categoria'])
      },
      error:err=>{
        const errores = extraererrores(err)
        this.errores = errores

      }
    })


  }
}
