import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CrearCategoriaDTO } from './categoriasdto';
import { FormUtilidades } from '../utils/form-utilidades';

@Component({
  selector: 'app-categorias',
  imports: [MatButtonModule,ReactiveFormsModule,MatInputModule,MatButtonModule],
  templateUrl: './categorias.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Categorias {
  formUtilidades = FormUtilidades
  @Output()
  postFormulario = new EventEmitter<CrearCategoriaDTO>()
  private fb = inject(FormBuilder)

  form= this.fb.group({
    tipo:['', { validators: [Validators.required,Validators.minLength(3) ] }],
  })

  guardarCategoria(){
    if(!this.form.valid){
      return
    }
    const categoria = this.form.value as CrearCategoriaDTO
    this.postFormulario.emit(categoria)
  }
}
