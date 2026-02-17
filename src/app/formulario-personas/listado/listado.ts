import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ListadoGenerico } from '../../componentes/listado-generico/listado-generico';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado',
  imports: [ListadoGenerico, MatButtonModule, MatIconModule,RouterLink],
  templateUrl: './listado.html',

})
export class Listado {
    @Input({required:true})
  personas!:any[]
}
