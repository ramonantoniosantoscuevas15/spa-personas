import { CategoriaDTO } from "../../categorias/categoriasdto"
import { CrearcorreoDTO } from "../correos/correosdto"
import { CreardirrecionesDTO } from "../dirreciones/dirrecionesdto"
import { CreartelefonoDTO } from "../telefonos/telefonosdto"

export interface personaDTO{
  id:Number,
  nombre:string,
  apellido:string,
  cedula:number,
  fechanacimiento : Date,
  Correos: CrearcorreoDTO[],
  Dirreciones:CreardirrecionesDTO[],
  Telefonos:CreartelefonoDTO[],
}

export interface CrearpersonaDTO{
  nombre:string,
  apellido:string,
  cedula:number,
  fechanacimiento : Date,
  Correos: CrearcorreoDTO[],
  Dirreciones:CreardirrecionesDTO[],
  Telefonos:CreartelefonoDTO[],

  categoriasIds?: number[]

}

export interface CategoriaPersonadto{
  categorias:CategoriaDTO[]
}
