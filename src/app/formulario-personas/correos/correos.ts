import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormUtilidades } from '../../utils/form-utilidades';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-correos',
  imports: [ReactiveFormsModule, MatFormFieldModule, FormsModule, MatInputModule,MatButtonModule],
  templateUrl: './correos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Correos {
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
  isValidFieldInArray(formArray: FormArray, index:number){
    return(
      formArray.controls[index].errors && formArray.controls[index].touched
    )
  }

  newcorreo(){
    this.correos.push(this.fb.control('',[Validators.required,Validators.pattern(this.formUtilidades.emailPattern)]))
  }
}

