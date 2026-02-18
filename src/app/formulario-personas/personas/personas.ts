import { ChangeDetectionStrategy, Component, EventEmitter, inject, Inject, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtilidades } from '../../utils/form-utilidades';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Correos } from "../correos/correos";

import { Telefonos } from "../telefonos/telefonos";
import { CrearpersonaDTO, personaDTO } from './personasdto';
import { correoDTO, CrearcorreoDTO } from '../correos/correosdto';
import { CreartelefonoDTO } from '../telefonos/telefonosdto';
import { CreardirrecionesDTO } from '../dirreciones/dirrecionesdto';
import { SelectorMultiple } from "../../componentes/selector-multiple/selector-multiple";
import { SelectorMultipleDTO } from '../../componentes/selector-multiple/selector-multiplemodelo';
import { MatDatepickerModule } from '@angular/material/datepicker';
import moment from 'moment';
import { Dirreciones } from '../dirreciones/dirreciones';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';






@Component({
  selector: 'app-personas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule, SelectorMultiple, MatDatepickerModule, Dirreciones, Telefonos, Correos, SweetAlert2Module],
  templateUrl: './personas.html',


})
export class Personas implements OnInit {
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }
  private fb = inject(FormBuilder)
  formUtilidades = FormUtilidades
  @Input() modelo?: personaDTO
  @Output() postPersona = new EventEmitter<CrearpersonaDTO>()
  correos: CrearcorreoDTO[] = []
  telefonos: CreartelefonoDTO[] = []
  dirreciones: CreardirrecionesDTO[] = []
  correoed?: correoDTO
  @Input({ required: true })
  categoriasNoSeleccionadas!: SelectorMultipleDTO[]

  @Input({ required: true })
  categoriasSeleccionadas!: SelectorMultipleDTO[]


  form = this.fb.group({

    nombre: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    apellido: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    cedula: [0, [Validators.required, Validators.min(1)]],
    fechanacimiento: new FormControl<Date | null>(null),

  })




  guardarPersonas() {

    const persona = this.form.value as CrearpersonaDTO

    persona.fechanacimiento = moment(persona.fechanacimiento).toDate()



    persona.Correos = this.correos
    persona.Dirrecciones = this.dirreciones
    persona.Telefonos = this.telefonos
    const categoriasId = this.categoriasSeleccionadas.map(val => val.id)


    persona.CategoriasId = categoriasId






    this.postPersona.emit(persona)



  }
  agregarcorreo(correos: CrearcorreoDTO) {

    this.correos.push(correos)

    console.log(this.correos)



  }
  agregartelefono(telefono: CreartelefonoDTO) {
    this.telefonos.push(telefono)
    console.log(this.telefonos)

  }

  agregardirrecion(dirreciones: CreardirrecionesDTO) {
    this.dirreciones.push(dirreciones)
    console.log(this.dirreciones)

  }

}
