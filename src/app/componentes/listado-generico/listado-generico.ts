import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-generico',
  imports: [],
  templateUrl: './listado-generico.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoGenerico {
  @Input({required: true})
  listado: any
}
