import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Matiere } from '../models/Models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private http:HttpClient) { }
  getAllMatieres(){
    return this.http.get<Matiere[]>(environment.baseUrl+'Matieres/');
  }
  getMatiereById(id:number){
    return this.http.get<Matiere>(environment.baseUrl+'Matieres/'+id)
  }
  addMatiere(matiere:Matiere){
    return this.http.post<Matiere>(environment.baseUrl+'Matieres/',matiere)
  }
  updateMatiere(id:number,matiere:Matiere){
    return this.http.put<Matiere>(environment.baseUrl+'Matieres/'+id,matiere)
  }
  deleteMatiere(id:any){
    return this.http.delete(environment.baseUrl+'Matieres/'+id)
  }
}
