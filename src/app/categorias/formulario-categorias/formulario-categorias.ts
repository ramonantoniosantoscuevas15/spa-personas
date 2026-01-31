import { ChangeDetectionStrategy, Component, inject, Inject } from '@angular/core';
import { Categorias } from "../categorias";
import { CrearCategoriaDTO } from '../categoriasdto';
import { CategoriaServices } from '../categoriaServices';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-categorias',
  imports: [Categorias],
  templateUrl: './formulario-categorias.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioCategorias {
  private categoriasservice = inject(CategoriaServices)
  private router = inject(Router)
  guardarCategoria(categoria: CrearCategoriaDTO){
    this.categoriasservice.Crear(categoria).subscribe(()=>{
      this.router.navigate(['/indice-categoria'])

    })


  }
}
