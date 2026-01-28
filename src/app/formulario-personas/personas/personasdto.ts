import { CrearcorreoDTO } from "../correos/correosdto"
import { CreardirrecionesDTO } from "../dirreciones/dirrecionesdto"
import { CreartelefonoDTO } from "../telefonos/telefonosdto"

export interface personaDTO{
  id:Number,
  nombre:string,
  apellido:string,
  cedula:number,
  fechanacimiento : Date,
  notas: string
}

export interface CrearpersonaDTO{
  nombre:string,
  apellido:string,
  cedula:number,
  fechanacimiento : Date,
  notas: string,
  listacorreos: CrearcorreoDTO[],
  listatelefonos:CreartelefonoDTO[],
  listadirreciones:CreardirrecionesDTO[],
  categoriasIds?: number[]

}
