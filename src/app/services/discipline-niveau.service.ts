import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DisciplineNiveau } from '../models/Models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DisciplineNiveauService {

  constructor(private http:HttpClient) { }
  getAllDiscipline(){
    return this.http.get<DisciplineNiveau[]>(environment.baseUrl+'DisciplineNiveaux/')
  }
  getDisciplineById(id:number){
    return this.http.get<DisciplineNiveau>(environment.baseUrl+'DisciplineNiveaux/'+id)
  }
  addDiscipline(discipline:DisciplineNiveau){
    return this.http.post<DisciplineNiveau>(environment.baseUrl+'DisciplineNiveaux/',discipline)
  }
  updateDiscipline(id:number,discipline:DisciplineNiveau){
    return this.http.put<DisciplineNiveau>(environment.baseUrl+'DisciplineNiveaux/'+id,discipline)
  }
  deleteDiscipline(id:number){
    return this.http.delete(environment.baseUrl+'DisciplineNiveaux/'+id)

  }  
}
