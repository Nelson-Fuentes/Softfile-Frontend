import { User } from "./user";

export class StudyCenter{
    constructor(
        public name:string,
        public user?:User,
        public _id?:string

    ){}
}

