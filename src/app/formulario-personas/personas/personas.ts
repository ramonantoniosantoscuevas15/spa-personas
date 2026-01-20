import {  ChangeDetectionStrategy, Component, inject, Inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtilidades } from '../../utils/form-utilidades';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Correos } from "../correos/correos";
import { Dirreciones } from "../dirreciones/dirreciones";




@Component({
  selector: 'app-personas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule, Correos, Dirreciones],
  templateUrl: './personas.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Personas {
  private fb = inject(FormBuilder)
  formUtilidades = FormUtilidades

  form = this.fb.group({

    nombre: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    apellido: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    cedula: ['', { validators: [Validators.required] }],





  })
}
