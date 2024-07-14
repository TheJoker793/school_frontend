import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salle } from '../models/Models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private http:HttpClient) { }

  getAlSalles(){
    return this.http.get<Salle[]>(environment.baseUrl+'Salles/');
  }
  getSalleById(id:number){
    return this.http.get<Salle>(environment.baseUrl+'Salles/'+id)
  }
  addSalle(salle:Salle){
    return this.http.post<Salle>(environment.baseUrl+'Salles/',salle)
  }
  updateSalle(id:number,salle:Salle){
    return this.http.put<Salle>(environment.baseUrl+'Salles/'+id,salle)
  }
  deleteSalle(id:any){
    return this.http.delete(environment.baseUrl+'Salles/'+id)
  }

}
