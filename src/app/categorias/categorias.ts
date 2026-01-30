import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CategoriaDTO, CrearCategoriaDTO } from './categoriasdto';
import { FormUtilidades } from '../utils/form-utilidades';

@Component({
  selector: 'app-categorias',
  imports: [MatButtonModule,ReactiveFormsModule,MatInputModule,MatButtonModule],
  templateUrl: './categorias.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Categorias implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }
  }
  formUtilidades = FormUtilidades
  @Input() modelo?: CategoriaDTO
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
