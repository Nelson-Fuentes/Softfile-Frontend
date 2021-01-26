import {  Email } from './email';

export class User{

  constructor (
    public username: string,
    public firstname: string,
    public lastname: string,
    public password?: string,
    public email?: string | Email [],
    public _id?: string,
  ){}

}
