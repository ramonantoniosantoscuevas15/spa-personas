import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, inject, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators, FormArray, ControlValueAccessor, Validator, AbstractControl, ValidationErrors, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormUtilidades } from '../../utils/form-utilidades';
import { CreartelefonoDTO } from './telefonosdto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-telefonos',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule,],
  templateUrl: './telefonos.html',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() => Telefonos),
      multi:true

    },
    {
      provide: NG_VALIDATORS,
      useExisting:forwardRef(() => Telefonos),
      multi:true
    }
  ]

})
export class Telefonos implements ControlValueAccessor, Validator {
  validate(control: AbstractControl): ValidationErrors | null {
      return this.form.valid ? null: {invalidTelefonos: true}
    }
   private sub?: Subscription
     onTouchedCb?: ()=> void
     writeValue(obj: any): void {
       obj && this.form.setValue(obj,{emitEvent: false})
     }
     registerOnChange(fn: any): void {
      this.sub = this.form.valueChanges.subscribe(fn)
     }
     registerOnTouched(fn: any): void {
       this.onTouchedCb = fn
     }
     setDisabledState?(isDisabled: boolean): void {
       isDisabled ? this.form.disable() : this.form.enable()
     }
     ngOnDestroy():void{
       this.sub?.unsubscribe()
     }
  formUtilidades = FormUtilidades
  private fb = inject(FormBuilder)
  @Output() posttelefono = new EventEmitter<CreartelefonoDTO>()
  form = this.fb.group({
    tiponumero:['',[Validators.required, Validators.minLength(3)]],
    codigopais:['',[Validators.required, Validators.minLength(3)]],
    numero:[0,[Validators.required,Validators.min(1)]],
    // tiponumero:['',[Validators.required, Validators.minLength(3)]],
    // codigopais:['',[Validators.required, Validators.minLength(3)]],
    // numero: this.fb.array([[0,[Validators.required,Validators.min(1)]]]),



  })

  // get numero(){
  //   return this.form.get('numero') as FormArray
  // }
  // newnumeros(){
  //   this.numero.push(this.fb.control('',[Validators.required,Validators.min(1)]))
  // }
  // onDeletenumero(index:number){
  //   this.numero.removeAt(index)
  // }







  agregartelefono(){
     const telefono = this.form.value as CreartelefonoDTO
     this.posttelefono.emit(telefono)

  }
}
