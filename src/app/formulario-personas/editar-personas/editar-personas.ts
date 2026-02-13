import { ChangeDetectionStrategy, Component, inject, Inject, Input, numberAttribute, OnInit } from '@angular/core';
import { Personas } from "../personas/personas";
import { CrearpersonaDTO, personaDTO } from '../personas/personasdto';
import { SelectorMultipleDTO } from '../../componentes/selector-multiple/selector-multiplemodelo';
import { PersonasServices } from '../personas/personasServices';

@Component({
  selector: 'app-editar-personas',
  imports: [Personas],
  templateUrl: './editar-personas.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditarPersonas implements OnInit {
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

guardarPersonas(persona: CrearpersonaDTO){
  

}
}
