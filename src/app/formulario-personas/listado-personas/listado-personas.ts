import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { PersonasServices } from '../personas/personasServices';
import { personaDTO } from '../personas/personasdto';
import { PaginacionDTO } from '../../componentes/models/Paginaciondto';
import { HttpResponse } from '@angular/common/http';
import { ListadoGenerico } from "../../componentes/listado-generico/listado-generico";
import { MatTableModule } from '@angular/material/table';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-listado-personas',
  imports: [MatAnchor, RouterLink, ListadoGenerico, MatTableModule, MatButtonModule, MatPaginator,JsonPipe],
  templateUrl: './listado-personas.html',

})
export class ListadoPersonas {
  private personaservice = inject(PersonasServices)
  personas!:personaDTO[]
  columnasAMostrar = ['id','nombre','apellido','cedula','fechanacimiento','correos','dirrecciones','telefonos','acciones']
  paginacion:PaginacionDTO={pagina:1,recordsPorPagina:5}
  cantidadTotalRegistros!:number

  constructor(){
    this.Cargarregistros()

  }
  Cargarregistros(){
    this.personaservice.obtenertodos(this.paginacion).subscribe((respuesta:HttpResponse<personaDTO[]>)=>{
      this.personas = respuesta.body as personaDTO[]
      const cabecera = respuesta.headers.get("cantidadTotalRegistros") as string
      this.cantidadTotalRegistros = parseInt(cabecera,10)
    })

  }

  actualizarPaginacion(datos:PageEvent){
    this.paginacion = {pagina: datos.pageIndex+1,recordsPorPagina: datos.pageSize}
    this.Cargarregistros()
  }
 }
