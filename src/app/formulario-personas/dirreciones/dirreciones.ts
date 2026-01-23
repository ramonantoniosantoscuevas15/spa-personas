import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { MatFormField, MatLabel, MatFormFieldModule } from "@angular/material/form-field";
import { MatInput, MatInputModule } from "@angular/material/input";
import { FormUtilidades } from '../../utils/form-utilidades';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CreardirrecionesDTO } from './dirrecionesdto';

@Component({
  selector: 'app-dirreciones',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule,],
  templateUrl: './dirreciones.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dirreciones {
  formUtilidades = FormUtilidades
  private fb = inject(FormBuilder)
  @Output() postdirrecion = new EventEmitter<CreardirrecionesDTO>()
  form = this.fb.group({
    dirreciones: this.fb.array([])


  })

  get dirreciones() {
    return this.form.get('dirreciones') as FormArray
  }
  newdirrecion() {
    this.dirreciones.push(this.fb.group({
      tipo: ['', [Validators.required, Validators.minLength(3)]],
      ubicacion: ['', [Validators.required, Validators.minLength(3)]],
      ciudad: ['', [Validators.required, Validators.minLength(3)]],
      provincia: ['', [Validators.required, Validators.minLength(3)]],
      codigopostal: ['', [Validators.required]],
      pais: ['', [Validators.required, Validators.minLength(3)]],
    }))
  }

   onDeletedirrecion(index:number){
    this.dirreciones.removeAt(index)


   }

  // newubicacion(){
  //   this.ubicacion.push(this.fb.control('', [Validators.required, Validators.minLength(3)]))
  // }

  agregardirrecion() {
    const dirrecion = this.form.value as CreardirrecionesDTO
    this.postdirrecion.emit(dirrecion)
  }

}

