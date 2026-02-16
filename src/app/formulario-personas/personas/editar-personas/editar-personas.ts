import { ChangeDetectionStrategy, Component, EventEmitter, inject, Inject, Input, numberAttribute, OnInit, Output } from '@angular/core';
import { Personas } from "../personas";
import { CrearpersonaDTO, personaDTO } from '../personasdto';
import { SelectorMultipleDTO } from '../../../componentes/selector-multiple/selector-multiplemodelo';
import { PersonasServices } from '../personasServices';
import { Cargando } from "../../../componentes/cargando/cargando";
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SelectorMultiple } from '../../../componentes/selector-multiple/selector-multiple';
import { FormUtilidades } from '../../../utils/form-utilidades';
import { correoDTO, CrearcorreoDTO } from '../../correos/correosdto';
import { CreartelefonoDTO, telefonoDTO } from '../../telefonos/telefonosdto';
import { CreardirrecionesDTO, dirrecionesDTO } from '../../dirreciones/dirrecionesdto';
import moment from 'moment';
import { EditarCorreos } from "../../correos/editar-correos/editar-correos";
import { EditarDirreciones } from "../../dirreciones/editar-dirreciones/editar-dirreciones";
import { EditarTelefonos } from "../../telefonos/editar-telefonos/editar-telefonos";

@Component({
  selector: 'app-editar-personas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule, MatDatepickerModule, Personas, Cargando],
  templateUrl: './editar-personas.html',

})
export class EditarPersonas implements OnInit {
  ngOnInit(): void {
    this.personasServices.actualizarGet(this.id).subscribe(modelo=>{
       this.persona= modelo.persona
       this.correos=modelo.persona.Correos
       this.categoriasSeleccionadas = modelo.categoriasSeleccionadas
     this.categoriasNoSeleccionadas = modelo.categoriasNoSeleccionadas.map(categoria =>{
         return <SelectorMultipleDTO>{id:categoria.id,tipo:categoria.tipo}
      })

  })
  }
  // private fb = inject(FormBuilder)
  // formUtilidades = FormUtilidades
  // @Input() modelo?: personaDTO
  // correos: CrearcorreoDTO[] = []
  // telefonos: CreartelefonoDTO[] = []
  // dirreciones: CreardirrecionesDTO[] = []
  // @Output() postPersona = new EventEmitter<CrearpersonaDTO>()
  // @Input({ required: true })
  // categoriasNoSeleccionadas!: SelectorMultipleDTO[]

  // @Input({ required: true })
  // categoriasSeleccionadas!: SelectorMultipleDTO[]
  // correosed?: correoDTO
  // dirrecionesed?: dirrecionesDTO
  // telefonosed?: telefonoDTO
    @Input({ transform: numberAttribute })
   id!: number
   persona?: personaDTO
   correos?:correoDTO[]
    categoriasSeleccionadas!: SelectorMultipleDTO[]
    categoriasNoSeleccionadas!: SelectorMultipleDTO[]
    personasServices = inject(PersonasServices)
  router = inject(Router)

   guardarPersonas(persona: CrearpersonaDTO){
   this.personasServices.actualizar(this.id,persona).subscribe({
   next:()=>{
     this.router.navigate(['/'])
   }

 })

 }
  // form = this.fb.group({

  //   nombre: ['', { validators: [Validators.required, Validators.minLength(3)] }],
  //   apellido: ['', { validators: [Validators.required, Validators.minLength(3)] }],
  //   cedula: [0, [Validators.required, Validators.min(1)]],
  //   fechanacimiento: new FormControl<Date | null>(null),

  // })
  // guardarPersonas() {

  //   const persona = this.form.value as CrearpersonaDTO


  //   persona.fechanacimiento = moment(persona.fechanacimiento).toDate()



  //   persona.Correos = this.correos
  //   persona.Dirrecciones = this.dirreciones
  //   persona.Telefonos = this.telefonos
  //   const categoriasId = this.categoriasSeleccionadas.map(val => val.id)


  //   persona.CategoriasId = categoriasId






  //   this.postPersona.emit(persona)



  // }
  // editarcorreo(correos: CrearcorreoDTO) {
  //   this.correos.push(correos)

  //   console.log(this.correos)
  // }
  // editardirrecion(dirreciones: CreardirrecionesDTO){
  //   this.dirreciones.push(dirreciones)
  //   console.log(this.dirreciones)

  // }
  // editartelefono(telefono: CreartelefonoDTO){
  //   this.telefonos.push(telefono)
  //   console.log(this.telefonos)

  // }
}
