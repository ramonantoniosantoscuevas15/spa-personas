import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { correoDTO, CrearcorreoDTO } from '../correosdto';
import { FormUtilidades } from '../../../utils/form-utilidades';

@Component({
  selector: 'app-editar-correos',
  imports: [ReactiveFormsModule, MatFormFieldModule, FormsModule, MatInputModule,MatButtonModule],
  templateUrl: './editar-correos.html',

})
export class EditarCorreos implements OnInit {
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }
  @Input() modelo?: correoDTO
  @Output() postcorreo = new EventEmitter<CrearcorreoDTO>()
   private fb = inject(FormBuilder)
  formUtilidades = FormUtilidades
   form = this.fb.group({
    correos: ['',[Validators.required,Validators.pattern(this.formUtilidades.emailPattern)]],


  })
   editarcorreo(){

    const correo = this.form.value as CrearcorreoDTO
    this.postcorreo.emit(correo)


   }
}


