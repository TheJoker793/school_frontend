import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnneeScolaire } from '../models/Models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AnneeScolaireService {

  constructor(private http:HttpClient) { }
  GetAllYears(){
    return this.http.get<AnneeScolaire[]>(environment.baseUrl+'AnneeScolaires/');
  }
  getYearById(id:number){
    return this.http.get<AnneeScolaire>(environment.baseUrl+'AnneeScolaires/'+id);
  }
  addYear(annee:AnneeScolaire){
    return this.http.post<AnneeScolaire>(environment.baseUrl+'AnneeScolaires/',annee);
  }
  updateYear(id:number,annee:AnneeScolaire){
    return this.http.put<AnneeScolaire>(environment.baseUrl+'AnneeScolaires/'+id,annee);

  }
}
