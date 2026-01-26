import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Categorias } from "../categorias";
import { CrearCategoriaDTO } from '../categoriasdto';

@Component({
  selector: 'app-formulario-categorias',
  imports: [Categorias],
  templateUrl: './formulario-categorias.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioCategorias {
  guardarCategoria(categoria: CrearCategoriaDTO){
    console.log('creando Categoria',categoria)

  }
}
