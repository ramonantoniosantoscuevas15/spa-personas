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
import { Cargando } from "../componentes/cargando/cargando";
import { extraererrores } from '../componentes/funciones/extraererrores';
import { HotToastService, provideHotToastConfig } from '@ngxpert/hot-toast';





@Component({
  selector: 'app-formulario-personas',
  imports: [Personas, MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule, Cargando],
  templateUrl: './formulario-personas.html',

})
export class FormularioPersonas {


  categoriasSeleccionadas : SelectorMultipleDTO[] = []
  categoriasNoSeleccionadas : SelectorMultipleDTO[] = []
  personasServices = inject(PersonasServices)
  router = inject(Router)
  toast = inject(HotToastService)
  error: string[]=[]

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
         this.router.navigate(['/listado-personas'])
         this.toast.success('Persona agragada Correctamente')


      },
      error: err=>{
        const errores = extraererrores(err)
        this.error = errores
        this.toast.error('Problemas al inserta la persona', {dismissible:true})
      }
     })

    // console.log(persona)

  }
   

}
