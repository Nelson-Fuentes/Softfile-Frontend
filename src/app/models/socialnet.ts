export class Socialnet{

  constructor(
    public name:string,
    public domain: string,
    public _id?:string,
    public fontawesone?:string
  ){}

}

export class SocialnetUser {

  constructor(
    public link: string,
    public socialnet: Socialnet,
    public user?:string,
    public _id?:string
  ){}

}
