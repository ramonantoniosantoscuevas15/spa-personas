import { ChangeDetectionStrategy, Component, Input, numberAttribute } from '@angular/core';
import { CategoriaDTO, CrearCategoriaDTO } from '../categoriasdto';
import { Categorias } from "../categorias";

@Component({
  selector: 'app-editar-categorias',
  imports: [Categorias],
  templateUrl: './editar-categorias.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditarCategorias {
  @Input({transform: numberAttribute})
  id!:number
  categoria?: CategoriaDTO

  guardarCategoria(categoria: CrearCategoriaDTO){
      console.log('creando Categoria',categoria)

    }
}
