import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { FormUtilidades } from '../../utils/form-utilidades';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dirreciones',
  imports: [MatFormField, MatLabel, MatInput],
  templateUrl: './dirreciones.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dirreciones {
formUtilidades = FormUtilidades
private fb = inject(FormBuilder)
form = this.fb.group({
    tipo: ['', [Validators.required, Validators.minLength(3)]],
    ubicacion: this.fb.array([['', [Validators.required, Validators.minLength(3)]]]) ,
    ciudad: ['', [Validators.required, Validators.minLength(3)]],
    provincia: ['', [Validators.required, Validators.minLength(3)]],
    codigopostal: ['', [Validators.required]],
    pais: ['', [Validators.required, Validators.minLength(3)]],

  })

}
