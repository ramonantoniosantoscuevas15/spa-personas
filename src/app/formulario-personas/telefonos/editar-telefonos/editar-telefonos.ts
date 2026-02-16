import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CreartelefonoDTO, telefonoDTO } from '../telefonosdto';
import { FormUtilidades } from '../../../utils/form-utilidades';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-editar-telefonos',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule,],
  templateUrl: './editar-telefonos.html',

})
export class EditarTelefonos implements OnInit {
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }
  @Input() modelo? : telefonoDTO
  formUtilidades = FormUtilidades
  private fb = inject(FormBuilder)
  @Output() posttelefono = new EventEmitter<CreartelefonoDTO>()
  form = this.fb.group({
    tiponumero:['',[Validators.required, Validators.minLength(3)]],
    codigopais:['',[Validators.required, Validators.minLength(3)]],
    numero:[0,[Validators.required,Validators.min(1)]],

  })
  editartelefono(){
     const telefono = this.form.value as CreartelefonoDTO
     this.posttelefono.emit(telefono)

  }
 }

