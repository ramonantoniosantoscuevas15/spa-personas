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
  Correos: correoDTO[],
  Dirreciones:dirrecionesDTO[],
  Telefonos:telefonoDTO[],
  categorias:CategoriaDTO[]
}

export interface CrearpersonaDTO{
  nombre:string,
  apellido:string,
  cedula:number,
  fechanacimiento : Date,
  Correos: CrearcorreoDTO[],
  Dirrecciones:CreardirrecionesDTO[],
  Telefonos:CreartelefonoDTO[],
  CategoriasId?: number[]

}

export interface CategoriaPersonadto{
  categorias:CategoriaDTO[]
}

export interface PersonasPutGetDTO{
  persona: personaDTO
  categoriasSeleccionadas: CategoriaDTO[]
  categoriasNoSeleccionadas: CategoriaDTO[]
}
