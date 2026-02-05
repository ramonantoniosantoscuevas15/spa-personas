import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Personas } from "./personas/personas";
import { CrearpersonaDTO } from './personas/personasdto';
import { CrearcorreoDTO } from './correos/correosdto';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SelectorMultipleDTO } from '../componentes/selector-multiple/selector-multiplemodelo';
import { PersonasServices } from './personas/personasServices';
import { Router } from '@angular/router';




@Component({
  selector: 'app-formulario-personas',
  imports: [Personas,MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule,],
  templateUrl: './formulario-personas.html',
  
})
export class FormularioPersonas {


  categoriasSeleccionadas : SelectorMultipleDTO[] = []
  categoriasNoSeleccionadas : SelectorMultipleDTO[] = []
  personasServices = inject(PersonasServices)
  router = inject(Router)

   constructor(){
     this.personasServices.crearGet().subscribe(modelo=>{
      this.categoriasNoSeleccionadas = modelo.categorias.map(categoria=>{
        return <SelectorMultipleDTO>{id:categoria.id,tipo:categoria.tipo}
      })
     })
   }

  guardarPersonas(persona: CrearpersonaDTO){
     this.personasServices.crear(persona).subscribe({
       next: persona=>{
         console.log(persona)
         this.router.navigate(['/'])

      }
     })
    // console.log(persona)

  }

}
