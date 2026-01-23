import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormUtilidades } from '../../utils/form-utilidades';
import { CreartelefonoDTO } from './telefonosdto';

@Component({
  selector: 'app-telefonos',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule,],
  templateUrl: './telefonos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Telefonos {
  formUtilidades = FormUtilidades
  private fb = inject(FormBuilder)
  @Output() posttelefono = new EventEmitter<CreartelefonoDTO>()
  form = this.fb.group({
   numeros:this.fb.array([])

  })

  get numeros(){
    return this.form.get('numeros') as FormArray

  }

  newnumero(){
    this.numeros.push(this.fb.group({
    tipo:['',[Validators.required, Validators.minLength(3)]],
    codigopais:['',[Validators.required, Validators.minLength(3)]],
    numero: [0,[Validators.required,Validators.min(1)]],
    }))

  }

  onDeletenumero(index:number){
    this.numeros.removeAt(index)


  }

  agregartelefono(){
    const telefono = this.form.value as CreartelefonoDTO
    this.posttelefono.emit(telefono)

  }
}
