import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SelectorMultipleDTO } from './selector-multiplemodelo';

@Component({
  selector: 'app-selector-multiple',
  imports: [],
  templateUrl: './selector-multiple.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorMultiple {
  @Input({required: true})
  Seleccionados!:SelectorMultipleDTO[];

  @Input({required: true})
  NoSeleccionados!:SelectorMultipleDTO[];

  seleccionar(elemento: SelectorMultipleDTO,indice: number){
    this.Seleccionados.push(elemento)
    this.NoSeleccionados.slice(indice,1)
  }

  deseleccionar(elemento: SelectorMultipleDTO, indice: number){
    this.Seleccionados.push(elemento)
    this.NoSeleccionados.splice(indice,1)
  }

  seleccionarTodo(){
    this.Seleccionados.push(...this.NoSeleccionados)
    this.NoSeleccionados.length = 0
  }

  deseleccionarTodo(){
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados.length = 0
  }
}
