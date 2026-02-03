import { Component, inject, input, Input, numberAttribute, OnInit } from '@angular/core';
import { CategoriaDTO, CrearCategoriaDTO } from '../categoriasdto';
import { Categorias } from "../categorias";
import { CategoriaServices } from '../categoriaServices';
import { Cargando } from "../../componentes/cargando/cargando";
import { Router } from '@angular/router';
import { extraererrores } from '../../componentes/funciones/extraererrores';
import { MostrarErrores } from "../../componentes/mostrar-errores/mostrar-errores";

@Component({
  selector: 'app-editar-categorias',
  imports: [Categorias, Cargando],
  templateUrl: './editar-categorias.html',

})
export class EditarCategorias implements OnInit {
  ngOnInit(): void {
    this.categoriasServices.obtenerporid(this.id).subscribe(categorias=>{
      this.categoria = categorias
    })

  }
  @Input({ transform: numberAttribute })
  id!: number
  categoria?: CategoriaDTO
   categoriasServices = inject(CategoriaServices)
  private router = inject(Router)
  errores: string[] = []
  guardarCategoria(categoria: CrearCategoriaDTO) {
    this.categoriasServices.actualizar(this.id, categoria).subscribe({
      next: () => {
        this.router.navigate(['/indice-categoria'])
      },
      error: err => {
        const errores = extraererrores(err)
        this.errores = errores

      }
    })
  }
}
