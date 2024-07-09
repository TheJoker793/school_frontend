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
export interface PreviousSchool{
  id?:number,
  name:string,
  type:string,
  status:string
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
export interface Parent{
  id?:number,
  cin:string,
  firstName:string,
  lastName:string,
  dateOfBirth:Date,
  typeParently:string,
  place:string,
  function:string,
  mobile:string
}
export interface parentStudent{
  id?:number,
  parentId:number,
  studentId:number
}
export interface Diplome{
  id?:number,
  name:string,
  niveau:string,
  ecole:string,
  dateObtenir:Date,
  professeurId:number
}
export interface Classe{
  id?:number,
  name:string,
  niveauId:string,
  emploiId:number
}
export interface Niveau{
  id?:number,
  libelle:string,
  option:string,
  capacite:number
}
export interface Matiere{
  id?:number,
  name:string
}
export interface Salle{
  id?:number,
  numero:string,
  capacite:number
}
export interface Discipline{
  id?:number,
  name:string
}
export interface DisciplineNiveau{
  id?:number,
  disciplineId:number,
  niveauId:number
}
export interface Emploi{
  id?:number,
  heureDebut:string,
  heureFin:string,
  salleId:number,
  professeurId:number,
  disciplineId:number,
  classeId:number
}
export interface Assiduite{
  id?:number,
  dateDebut:string,
  dateFin:string,
  dateAssiduite:string,
  type:string,
  motif:string,
  conditionTenir:string,
  studentId:number
}
export interface AnneeScolaire{
  id?:string,
  dateDebut:Date,
  dateFin:Date,
  studentId:number,
  classeId:number
}
export interface Reglement{
  id?:number,
  dateReglement:Date,
  modePaiement:string,
  dateEcheance:Date,
  moisRegler:string,
  studentId:number
}
export interface Frais{
  id?:number,
  type:string,
  frais1:number,
  frais2:number,
  frais3:number,
  reglementId:number,
  niveauId:number
}