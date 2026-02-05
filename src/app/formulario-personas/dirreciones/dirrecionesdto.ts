export interface dirrecionesDTO{
  id:number,
  tipo:string,
  ubicacion:string,
  ciudad:string,
  provincia:string,
  codigopostal:string,
  pais:string
}

export interface CreardirrecionesDTO{
  tipodirrecion: string,
  ubicacion:[],
  ciudad:string,
  provincia:string,
  codigopostal:string,
  pais:string

}
