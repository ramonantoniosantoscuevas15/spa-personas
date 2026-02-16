import { ChangeDetectionStrategy, Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { EditarPersonas } from "../personas/editar-personas/editar-personas";
import { CrearpersonaDTO, personaDTO } from '../personas/personasdto';
import { SelectorMultipleDTO } from '../../componentes/selector-multiple/selector-multiplemodelo';
import { PersonasServices } from '../personas/personasServices';
import { Router } from '@angular/router';
import { Cargando } from "../../componentes/cargando/cargando";

@Component({
  selector: 'app-editar-formulario',
  imports: [],
  templateUrl: './editar-formulario.html',

})
export class EditarFormulario implements OnInit {
  ngOnInit(): void {
     this.personasServices.actualizarGet(this.id).subscribe(modelo=>{
       this.persona= modelo.persona
       this.categoriasSeleccionadas = modelo.categoriasSeleccionadas
       this.categoriasNoSeleccionadas = modelo.categoriasNoSeleccionadas.map(categoria =>{
        return <SelectorMultipleDTO>{id:categoria.id,tipo:categoria.tipo}
      })

     })
  }
     @Input({ transform: numberAttribute })
     id!: number
     persona?: personaDTO
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
 }
