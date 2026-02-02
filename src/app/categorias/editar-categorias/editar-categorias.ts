import { Component, inject, input, Input, numberAttribute, OnInit } from '@angular/core';
import { CategoriaDTO, CrearCategoriaDTO } from '../categoriasdto';
import { Categorias } from "../categorias";
import { CategoriaServices } from '../categoriaServices';
import { Cargando } from "../../componentes/cargando/cargando";
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-categorias',
  imports: [Categorias, Cargando],
  templateUrl: './editar-categorias.html',

})
export class EditarCategorias implements OnInit {
  ngOnInit(): void {
    this.categoriasservice.obtenerporid(this.id).subscribe(categorias=>{
     this.categoria = categorias
    })
  }
  @Input({transform: numberAttribute})
  id!:number
  categoria?: CategoriaDTO
  private categoriasservice = inject(CategoriaServices)
  router = inject(Router)

  guardarCategoria(categoria: CrearCategoriaDTO){
      this.categoriasservice.actualizar(this.id,categoria).subscribe({
        next:() =>{
          this.router.navigate(['/categorias'])

        }
      })

    }
}
