import {  Component, inject } from '@angular/core';
import { CategoriaServices } from '../categoriaServices';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CategoriaDTO } from '../categoriasdto';
import { ListadoGenerico } from "../../componentes/listado-generico/listado-generico";
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PaginacionDTO } from '../../componentes/models/Paginaciondto';
import { HttpResponse } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-indice-categoria',
  imports: [RouterLink, MatButtonModule, MatTableModule, MatPaginatorModule, ListadoGenerico,SweetAlert2Module],
  templateUrl: './indice-categoria.html',

})
export class IndiceCategoria {
  private categoriasServices = inject(CategoriaServices)
  categorias!: CategoriaDTO[]
  columnasAMostrar = ['id','tipo','acciones']
   paginacion:PaginacionDTO ={pagina:1,recordsPorPagina:5}
   cantidadTotalRegistros!:number


  constructor(){
    this.Cargarregistros()

  }
  Cargarregistros(){
    this.categoriasServices.obtenerTodos(this.paginacion).subscribe((respuesta:HttpResponse<CategoriaDTO[]>)=>
    {
      this.categorias = respuesta.body as CategoriaDTO[]
      const cabecera = respuesta.headers.get("cantidadTotalRegistros") as string
      this.cantidadTotalRegistros = parseInt(cabecera,10)

    }
    )
  }

  actualizarPaginacion(datos:PageEvent){
    this.paginacion = {pagina: datos.pageIndex+1,recordsPorPagina: datos.pageSize}
    this.Cargarregistros()
  }

  borrar(id:number){
    this.categoriasServices.borrar(id).subscribe(()=>{
      this.paginacion= {pagina:1,recordsPorPagina:5}
      this.Cargarregistros()
    })

  }
 }
