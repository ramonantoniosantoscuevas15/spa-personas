import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreardirrecionesDTO, dirrecionesDTO } from '../dirrecionesdto';
import { FormUtilidades } from '../../../utils/form-utilidades';

@Component({
  selector: 'app-editar-dirreciones',
  imports: [ReactiveFormsModule, MatFormFieldModule, FormsModule, MatInputModule,MatButtonModule],
  templateUrl: './editar-dirreciones.html',

})
export class EditarDirreciones implements OnInit {
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }
  @Input() modelo? : dirrecionesDTO
    formUtilidades = FormUtilidades
  private fb = inject(FormBuilder)
  @Output() postdirrecion = new EventEmitter<CreardirrecionesDTO>()
  form = this.fb.group({
    tipodirrecion: ['', [Validators.required, Validators.minLength(3)]],
    ubicacion: ['', [Validators.required, Validators.minLength(3)]],
    ciudad: ['', [Validators.required, Validators.minLength(3)]],
    provincia: ['', [Validators.required, Validators.minLength(3)]],
    codigopostal: ['', [Validators.required]],
    pais: ['', [Validators.required, Validators.minLength(3)]],

  })
  editardirrecion() {
     const dirrecion = this.form.value as CreardirrecionesDTO
     this.postdirrecion.emit(dirrecion)
  }
}
