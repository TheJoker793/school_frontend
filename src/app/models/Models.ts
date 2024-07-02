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

export interface Professor{
  id?: number,
  firstName: string,
  lastName: string,
  dateOfBirth: Date,
  place: string,
  email: string,
  mobile: string,
  gender: string,
  address: string
  

}