export interface IBocadillo{
  "id" : number,
  "nombre" : string,
  "descripcion" : string,
  "precio" : number
}

export interface IChivito extends IBocadillo{
  "mayonesa" : boolean
}
