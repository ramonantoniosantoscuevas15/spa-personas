import { Component, inject, Inject } from '@angular/core';
import { Categorias } from "../categorias";
import { CrearCategoriaDTO } from '../categoriasdto';
import { CategoriaServices } from '../categoriaServices';
import { Router, RouterLink } from '@angular/router';
import { extraererrores } from '../../componentes/funciones/extraererrores';
import { MostrarErrores } from "../../componentes/mostrar-errores/mostrar-errores";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario-categorias',
  imports: [Categorias,],
  templateUrl: './formulario-categorias.html',

})
export class FormularioCategorias {
  private categoriasservice = inject(CategoriaServices)
  private router = inject(Router)
  error: string[] = []
  guardarCategoria(categoria: CrearCategoriaDTO) {
    this.categoriasservice.Crear(categoria).subscribe({
      next: categoria => {
        Swal.fire({
          title: "Categoria Agregada Exitosamente",
          icon: "success",
          draggable: true
        })
        console.log(categoria)
        this.router.navigate(['/indice-categoria'])

      },
      error: err => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un erorr al Insertar la Categoria",
        })
        const errores = extraererrores(err)
        this.error = errores

      }



    })



  }
}
