import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, inject, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators, FormArray, FormControl, ControlValueAccessor, Validator, AbstractControl, ValidationErrors, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormUtilidades } from '../../utils/form-utilidades';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';
import { CrearcorreoDTO } from './correosdto';

@Component({
  selector: 'app-correos',
  imports: [ReactiveFormsModule, MatFormFieldModule, FormsModule, MatInputModule,MatButtonModule],
  templateUrl: './correos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=> Correos),
      multi:true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=>Correos),
      multi:true
    }
  ]
})
export class Correos implements ControlValueAccessor,Validator {
 validate(control: AbstractControl): ValidationErrors | null {
    return this.form.valid ? null: {invalidEmails: true}
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
  @Output() postcorreo = new EventEmitter<CrearcorreoDTO>()
   private fb = inject(FormBuilder)
  formUtilidades = FormUtilidades

  form = this.fb.group({

    correos:this.fb.array([
      ['',[Validators.required,Validators.pattern(this.formUtilidades.emailPattern)]],
    ])
  })

  get correos(){
    return this.form.get('correos') as FormArray
  }


  newcorreo(){

    this.correos.push(this.fb.control('',[Validators.required,Validators.pattern(this.formUtilidades.emailPattern)]))
  }
  onDeletecorreo(index:number){
    this.correos.removeAt(index)

  }


  agregarcorreo(){

    const correo = this.form.value as CrearcorreoDTO
    this.postcorreo.emit(correo)


  }
}

