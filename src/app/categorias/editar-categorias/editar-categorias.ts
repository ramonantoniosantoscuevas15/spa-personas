import { ChangeDetectionStrategy, Component, Input, numberAttribute } from '@angular/core';
import { CategoriaDTO } from '../categoriasdto';

@Component({
  selector: 'app-editar-categorias',
  imports: [],
  templateUrl: './editar-categorias.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditarCategorias {
  @Input({transform: numberAttribute})
  id!:number
  categoria?: CategoriaDTO
}
