import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormField, MatLabel, MatFormFieldModule } from "@angular/material/form-field";
import { MatInput, MatInputModule } from "@angular/material/input";
import { FormUtilidades } from '../../utils/form-utilidades';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dirreciones',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule,],
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

  get ubicacion(){
    return this.form.get('ubicacion') as FormArray
  }

  onDeleteUbicacion(index:number){
    this.ubicacion.removeAt(index)

  }

  newubicacion(){
    this.ubicacion.push(this.fb.control('', [Validators.required, Validators.minLength(3)]))
  }

}

