import { CategoriaDTO } from "../../categorias/categoriasdto"
import { correoDTO, CrearcorreoDTO } from "../correos/correosdto"
import { CreardirrecionesDTO, dirrecionesDTO } from "../dirreciones/dirrecionesdto"
import { CreartelefonoDTO, telefonoDTO } from "../telefonos/telefonosdto"

export interface personaDTO{
  id:Number,
  nombre:string,
  apellido:string,
  cedula:number,
  fechanacimiento : Date,
  correos: correoDTO[],
  Dirreciones:dirrecionesDTO[],
  Telefonos:telefonoDTO[],
}

export interface CrearpersonaDTO{
  nombre:string,
  apellido:string,
  cedula:number,
  fechanacimiento : Date,
  correos: CrearcorreoDTO,
  Dirreciones:CreardirrecionesDTO,
  Telefonos:CreartelefonoDTO,

  categoriasIds?: number[]

}

export interface CategoriaPersonadto{
  categorias:CategoriaDTO[]
}
