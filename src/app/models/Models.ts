export interface Student{
    id?:number,
    matricule:string,
    firstName:string,
    lastName:string,
    dateOfBirth:Date,
    place:string,
    gender:string,
    address:string,
    picture:string,
    previousSchoolId?:number
}