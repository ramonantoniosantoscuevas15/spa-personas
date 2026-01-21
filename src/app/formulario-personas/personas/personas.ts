import {  ChangeDetectionStrategy, Component, EventEmitter, inject, Inject, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtilidades } from '../../utils/form-utilidades';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Correos } from "../correos/correos";
import { Dirreciones } from "../dirreciones/dirreciones";
import { Telefonos } from "../telefonos/telefonos";
import { CrearpersonaDTO } from './personasdto';
import { CrearcorreoDTO } from '../correos/correosdto';
import { CreartelefonoDTO } from '../telefonos/telefonosdto';
import { CreardirrecionesDTO } from '../dirreciones/dirrecionesdto';




@Component({
  selector: 'app-personas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule, Correos, Dirreciones, Telefonos],
  templateUrl: './personas.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Personas {
  private fb = inject(FormBuilder)
  formUtilidades = FormUtilidades
  @Output() postPersona = new EventEmitter<CrearpersonaDTO>()
  listacorreos:CrearcorreoDTO[]=[]
  listatelefonos:CreartelefonoDTO[]=[]
  listadirreciones:CreardirrecionesDTO[]=[]

  form = this.fb.group({

    nombre: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    apellido: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    cedula: ['', { validators: [Validators.required] }],

  })


  guardarPersonas(){
    const persona = this.form.value as CrearpersonaDTO
    this.postPersona.emit(persona)



  }
   agregarcorreo(correo:CrearcorreoDTO){

    this.listacorreos.push(correo)
    console.log(this.listacorreos)
  }
  agregartelefono(telefono:CreartelefonoDTO){
    this.listatelefonos.push(telefono)
    console.log(this.listatelefonos)

  }

  agregardirrecion(dirreciones:CreardirrecionesDTO){
    this.listadirreciones.push(dirreciones)
    console.log(this.listadirreciones)

  }

}
