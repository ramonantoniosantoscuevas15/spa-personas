import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Personas } from "./personas/personas";




@Component({
  selector: 'app-formulario-personas',
  imports: [Personas,],
  templateUrl: './formulario-personas.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioPersonas { }
