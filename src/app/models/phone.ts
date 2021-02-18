import { User } from "./user";

export class PhoneCode {
  constructor (
    public code:string,
    public iso2: string,
    public iso3:string,
    public _id?:string
  ){}
}
export class PhoneNumber {
  constructor(
    public number:string,
    public code?:PhoneCode,
    public user?:User,
    public _id?: string
  ){}
}
