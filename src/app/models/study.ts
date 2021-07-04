import { User } from "./user";

export class StudyCenter{
    constructor(
        public name:string,
        public _id?:string

    ){}
}
export class StudyCenterUser{
    constructor(
        public study_center:StudyCenter,
        public user?:User,
        public _id?:string
    ){}
}
