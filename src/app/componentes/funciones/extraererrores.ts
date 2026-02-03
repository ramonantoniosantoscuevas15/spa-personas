export function extraererrores(obj:any):string[]{
  const err = obj.error.errors

  let mensajesdeerror: string[]=[]

  for(let llave in err){
    let campo = llave
    const mensajecampo = err [llave].map((mensaje:string)=>`${campo}:${mensaje}`)
    mensajesdeerror = mensajesdeerror.concat(mensajecampo)
  }

  return mensajesdeerror

}
