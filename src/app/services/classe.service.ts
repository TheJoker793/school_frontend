import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classe } from '../models/Models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http:HttpClient) { }
  getAllClasse(){
    return this.http.get<Classe[]>(environment.baseUrl+'Classes/');
  }
  getClasseById(id:number){
    return this.http.get<Classe>(environment.baseUrl+'Classes/'+id);
  }
  addClasse(classe:Classe){
    return this.http.post<Classe>(environment.baseUrl+'Classes/',classe);
  }
  updateClasse(id:number,classe:Classe){
    return this.http.put<Classe>(environment.baseUrl+'Classes/'+id,classe);
  }
  deleteClasse(id:number){
    return this.http.delete(environment.baseUrl+'Classes/'+id)
  }

  
}
