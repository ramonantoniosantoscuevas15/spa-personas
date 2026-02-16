import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, inject, Input, OnInit, Output } from '@angular/core';
import { MatFormField, MatLabel, MatFormFieldModule } from "@angular/material/form-field";
import { MatInput, MatInputModule } from "@angular/material/input";
import { FormUtilidades } from '../../utils/form-utilidades';
import { AbstractControl, ControlValueAccessor, FormArray, FormBuilder, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors, Validator, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CreardirrecionesDTO, dirrecionesDTO } from './dirrecionesdto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dirreciones',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule,],
  templateUrl: './dirreciones.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Dirreciones),
      multi: true

    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => Dirreciones),
      multi: true


    },
  ]

})
export class Dirreciones implements ControlValueAccessor,Validator, OnInit {
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }
  validate(control: AbstractControl): ValidationErrors | null {
    return this.form.valid ? null : { invalidDirreciones: true }
  }
  private sub?: Subscription
  onTouchedCb?: () => void
  writeValue(obj: any): void {
    obj && this.form.setValue(obj, { emitEvent: false })
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
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  formUtilidades = FormUtilidades
  @Input() modelo? : dirrecionesDTO
  private fb = inject(FormBuilder)
  @Output() postdirrecion = new EventEmitter<CreardirrecionesDTO>()
  form = this.fb.group({
    tipodirrecion: ['', [Validators.required, Validators.minLength(3)]],
    ubicacion: ['', [Validators.required, Validators.minLength(3)]],
    ciudad: ['', [Validators.required, Validators.minLength(3)]],
    provincia: ['', [Validators.required, Validators.minLength(3)]],
    codigopostal: ['', [Validators.required]],
    pais: ['', [Validators.required, Validators.minLength(3)]],
    // tipodirrecion:['', [Validators.required, Validators.minLength(3)]],
    // ubicacion:this.fb.array([['', [Validators.required, Validators.minLength(3)]]]),
    // ciudad: ['', [Validators.required, Validators.minLength(3)]],
    // provincia: ['', [Validators.required, Validators.minLength(3)]],
    // codigopostal: ['', [Validators.required]],
    // pais: ['', [Validators.required, Validators.minLength(3)]],



  })

  // get ubicacion(){
  //   return this.form.get('ubicacion') as FormArray
  // }


  // newubicacion(){
  //   this.ubicacion.push(this.fb.control('',[Validators.required, Validators.minLength(3)]))
  // }
  // onDeleteubicacion(index:number){
  //   this.ubicacion.removeAt(index)
  // }






  agregardirrecion() {
     const dirrecion = this.form.value as CreardirrecionesDTO
     this.postdirrecion.emit(dirrecion)
  }

}

