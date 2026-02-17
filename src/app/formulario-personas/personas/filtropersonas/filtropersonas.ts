import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriaDTO } from '../../../categorias/categoriasdto';
import { personaDTO } from '../personasdto';
import { FiltroPersona } from './filtropersona';
import { Location } from '@angular/common';
import { CategoriaServices } from '../../../categorias/categoriaServices';
import { PersonasServices } from '../personasServices';
import { PaginacionDTO } from '../../../componentes/models/Paginaciondto';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ListadoPersonas } from "../../listado-personas/listado-personas";
import { ListadoGenerico } from "../../../componentes/listado-generico/listado-generico";
import { Listado } from "../../listado/listado";
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-filtropersonas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, Listado, MatPaginator],
  templateUrl: './filtropersonas.html',

})
export class Filtropersonas implements OnInit {
  categoriasService = inject(CategoriaServices)
  personasServices = inject(PersonasServices)
  paginacion:PaginacionDTO={pagina:1,recordsPorPagina:10}
  cantidadTotalRegistros!:number

  ngOnInit(): void {
    this.categoriasService.obtenercategorias().subscribe(categoria => {
      this.categorias = categoria
      this.leerValoresUrl()
      this.buscarPersonas(this.form.value as FiltroPersona)
       this.form.valueChanges.subscribe(valores => {
      this.buscarPersonas(valores as FiltroPersona)
      this.escribirParametrosBusquedaEnUrl(valores as FiltroPersona)

    })
    })


  }
  escribirParametrosBusquedaEnUrl(valores: FiltroPersona) {
    let queryString = []
    if (valores.nombre) {
      queryString.push(`nombre=${encodeURI(valores.nombre)}`)
    }
    if (valores.CategoriasId !== 0) {
      queryString.push(`CategoriasId=${valores.CategoriasId}`)
    }
    this.location.replaceState('filtropersonas', queryString.join('&'))

  }
  limpiar() {
    this.form.patchValue({ nombre: '', CategoriasId: 0 })
  }
  buscarPersonas(valores: FiltroPersona) {
    valores.pagina=this.paginacion.pagina
    valores.recordsPorPagina=this.paginacion.recordsPorPagina
    this.personasServices.filtrar(valores).subscribe(respuesta =>{
      this.personas = respuesta.body as personaDTO[]
      const cabecera = respuesta.headers.get('cantidadTotalRegistros') as string
      this.cantidadTotalRegistros = parseInt(cabecera,10)
    })


  }
  leerValoresUrl() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      var objeto: any = {}
      if (params.nombre) {
        objeto.nombre = params.nombre
      }
      if (params.CategoriasId) {
        objeto.CategoriasId = Number(params.CategoriasId)
      }
      this.form.patchValue(objeto)
    })
  }
  actualizarPaginacion(datos:PageEvent){
    this.paginacion = {pagina: datos.pageIndex+1,recordsPorPagina: datos.pageSize}
    this.buscarPersonas(this.form.value as FiltroPersona)

  }
  private fb = inject(FormBuilder)
  private location = inject(Location)
  private activatedRoute = inject(ActivatedRoute)
  form = this.fb.group({
    nombre: '',
    CategoriasId: 0
  })
  categorias!: CategoriaDTO[]
  personas!: personaDTO[]
}
