import { ChangeDetectionStrategy, Component, EventEmitter, inject, Inject, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { SelectorMultiple } from "../../componentes/selector-multiple/selector-multiple";
import { SelectorMultipleDTO } from '../../componentes/selector-multiple/selector-multiplemodelo';




@Component({
  selector: 'app-personas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule, Correos, Dirreciones, Telefonos, SelectorMultiple],
  templateUrl: './personas.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Personas {
  private fb = inject(FormBuilder)
  formUtilidades = FormUtilidades
  @Output() postPersona = new EventEmitter<CrearpersonaDTO>()
  listadocorreo: CrearcorreoDTO[] = []
  listadotelefonos: CreartelefonoDTO[] = []
  listadirreciones: CreardirrecionesDTO[] = []
  @Input({ required: true })
  categoriasNoSeleccionadas!: SelectorMultipleDTO[]

  @Input({ required: true })
  categoriasSeleccionadas!: SelectorMultipleDTO[]


  form = this.fb.group({

    nombre: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    apellido: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    cedula: ['', { validators: [Validators.required] }],



  })






  guardarPersonas() {

    const persona = this.form.value as CrearpersonaDTO

    // correo =this.listadocorreo.map(val=> val.correos)

    // persona.listacorreos =  correo?.map(correos => ({ correos } as unknown as CrearcorreoDTO))

    persona.listacorreos = this.listadocorreo
    persona.listadirreciones = this.listadirreciones
    persona.listatelefonos = this.listadotelefonos
    const categoriasIds = this.categoriasSeleccionadas.map(val => val.id)


    persona.categoriasIds = categoriasIds






    this.postPersona.emit(persona)



  }
  agregarcorreo(correos: CrearcorreoDTO) {
    this.listadocorreo.push(correos)
    console.log(this.listadocorreo)



  }
  agregartelefono(telefono: CreartelefonoDTO) {
    this.listadotelefonos.push(telefono)
    console.log(this.listadotelefonos)

  }

  agregardirrecion(dirreciones: CreardirrecionesDTO) {
    this.listadirreciones.push(dirreciones)
    console.log(this.listadirreciones)

  }

}
