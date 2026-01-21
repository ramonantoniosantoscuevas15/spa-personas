import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Personas } from "./personas/personas";
import { CrearpersonaDTO } from './personas/personasdto';
import { CrearcorreoDTO } from './correos/correosdto';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@Component({
  selector: 'app-formulario-personas',
  imports: [Personas,MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule,],
  templateUrl: './formulario-personas.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioPersonas {
  listacorreos:CrearcorreoDTO[]=[]

  guardarPersonas(persona: CrearpersonaDTO){
    console.log("Se creo la Persona", persona)

  }

}
