import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Discipline } from '../models/Models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {

  constructor(private http:HttpClient) { }
  getAllDiscipline(){
    return this.http.get<Discipline[]>(environment.baseUrl+'Disciplines/')
  }
  getDisciplineById(id:number){
    return this.http.get<Discipline>(environment.baseUrl+'Disciplines/'+id)
  }
  addDiscipline(discipline:Discipline){
    return this.http.post<Discipline>(environment.baseUrl+'Disciplines/',discipline)
  }
  updateDiscipline(id:number,discipline:Discipline){
    return this.http.put<Discipline>(environment.baseUrl+'Disciplines/'+id,discipline)
  }
  deleteDiscipline(id:number){
    return this.http.delete(environment.baseUrl+'Disciplines/'+id)

  }

}
