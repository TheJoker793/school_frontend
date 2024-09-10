import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professor } from '../models/Models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {


  constructor(private http:HttpClient) { }

  getAllProfessors(){
  return this.http.get<Professor[]>(environment.baseUrl+'Professeurs/')
}
  getProfessorById(id:any){

return this.http.get<Professor>(environment.baseUrl+'Professeurs/'+id);
}
  addProfessor(prof:Professor){
return this.http.post<Professor>(environment.baseUrl+'Professeurs/',prof);
}
  updateProfessor(id:number,prof:Professor){
return this.http.put<Professor>(environment.baseUrl+'Professeurs/'+id,prof);
  }
  deleteProfessor(id:number){
   return this.http.delete(environment.baseUrl+'Professeurs/'+id);
  }
}
