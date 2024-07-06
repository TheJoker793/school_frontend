import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salle } from '../models/Models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private http:HttpClient) { }

  getAllMatieres(){
    return this.http.get<Salle[]>(environment.baseUrl+'Salles/');
  }
  getMatiereById(id:number){
    return this.http.get<Salle>(environment.baseUrl+'Salles/'+id)
  }
  addMatiere(salle:Salle){
    return this.http.post<Salle>(environment.baseUrl+'Salles/',salle)
  }
  updateMatiere(id:number,salle:Salle){
    return this.http.put<Salle>(environment.baseUrl+'Salles/'+id,salle)
  }
  deleteMatiere(id:any){
    return this.http.delete(environment.baseUrl+'Salles/'+id)
  }

}
