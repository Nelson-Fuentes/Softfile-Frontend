export class Country {

  constructor (
    public name:string,
    public _id?: string,
    public cities?: City[]
  ){}

}

export class City {

  constructor (
    public name: string,
    public country?: Country,
    public _id?: string
  ){}

}
