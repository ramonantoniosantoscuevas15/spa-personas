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
import Swal from 'sweetalert2'
import { extraererrores } from '../../../componentes/funciones/extraererrores';

@Component({
  selector: 'app-editar-personas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule, MatDatepickerModule, Personas, Cargando],
  templateUrl: './editar-personas.html',

})
export class EditarPersonas implements OnInit {
  ngOnInit(): void {
    this.personasServices.actualizarGet(this.id).subscribe(modelo => {
      this.persona = modelo.persona
      this.correos = modelo.persona.Correos
      this.categoriasSeleccionadas = modelo.categoriasSeleccionadas
      this.categoriasNoSeleccionadas = modelo.categoriasNoSeleccionadas.map(categoria => {
        return <SelectorMultipleDTO>{ id: categoria.id, tipo: categoria.tipo }
      })

    })
  }

  @Input({ transform: numberAttribute })
  id!: number
  persona?: personaDTO
  correos?: correoDTO[]
  categoriasSeleccionadas!: SelectorMultipleDTO[]
  categoriasNoSeleccionadas!: SelectorMultipleDTO[]
  personasServices = inject(PersonasServices)
  router = inject(Router)
  error: string[] = []

  guardarPersonas(persona: CrearpersonaDTO) {
    this.personasServices.actualizar(this.id, persona).subscribe({
      next: () => {
        Swal.fire({
          title: "Persona Actualizada exitosamente",
          icon: "success",
          draggable: true
        })
        this.router.navigate(['/listado-personas'])
      },
      error: err => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un erorr al Insertar la Persona",
              })
              const errores = extraererrores(err)
              this.error = errores

            }


    })

  }

}
