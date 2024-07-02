import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professor } from '../models/Models';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  baseUrl:string="https://localhost:7020/api/"


  constructor(private http:HttpClient) { }

  getAllProfessors(){
  return this.http.get<Professor[]>(this.baseUrl+'professors')
}
  getProfessorById(id:any){

return this.http.get<Professor>(this.baseUrl+'professors/'+id);
}
  addProfessor(prof:Professor){
return this.http.post<Professor>(this.baseUrl+'professors/',prof);
}
  updateProfessor(id:number,prof:Professor){
return this.http.put<Professor>(this.baseUrl+'professors/'+id,prof);
  }
  deleteProfessor(id:number){
   return this.http.delete(this.baseUrl+'professors/'+id);
  }
}
