import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { personaDTO } from '../personasdto';
import { PersonasServices } from '../personasServices';
import { buscarpersonas } from './buscarpersonas';
import { Listado } from "../../listado/listado";
import { Location } from '@angular/common';

@Component({
  selector: 'app-bucarpersona',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, Listado],
  templateUrl: './bucarpersona.html',

})
export class Bucarpersona implements OnInit {
  ngOnInit(): void {
    this.personasServices.obtenerpersonas().subscribe(persona => {
      this.personas = persona
      this.leerValoresUrl()
      this.buscarPersonas(this.form.value as buscarpersonas)
      this.form.valueChanges.subscribe(valor => {
        this.buscarPersonas(valor as buscarpersonas)
        this.escribirParametrosBusquedaEnUrl(valor as buscarpersonas)

      })
    })


  }
  private fb = inject(FormBuilder)
  private location = inject(Location)
  private activatedRoute = inject(ActivatedRoute)
  personasServices = inject(PersonasServices)
  form = this.fb.group({
    nombre: '',

  })
  escribirParametrosBusquedaEnUrl(valor: buscarpersonas) {
    let queryString = []
    if (valor.nombre) {
      queryString.push(`nombre=${encodeURI(valor.nombre)}`)
    }
    this.location.replaceState('buscarpersonas', queryString.join('&'))


  }
  buscarPersonas(valor: buscarpersonas) {

    this.personasServices.buscar(valor).subscribe(respuesta => {
      this.personas = respuesta.body as personaDTO[]

    })


  }
  leerValoresUrl() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      var objeto: any = {}
      if (params.nombre) {
        objeto.nombre = params.nombre
      }

      this.form.patchValue(objeto)
    })
  }
  personas!: personaDTO[]
  limpiar() {
    this.form.patchValue({ nombre: '' })
  }

}
