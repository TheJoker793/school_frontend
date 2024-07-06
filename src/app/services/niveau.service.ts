import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Niveau } from '../models/Models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  constructor(private http:HttpClient) { }
  getAllLevel(){
    return this.http.get<Niveau[]>(environment.baseUrl+'Niveaux/');
  }
  getLeveleById(id:number){
    return this.http.get<Niveau>(environment.baseUrl+'Niveaux/'+id);
  }
  addLevel(niveau:Niveau){
    return this.http.post<Niveau>(environment.baseUrl+'Niveaux/',niveau);
  }
  updateLevel(id:number,niveau:Niveau){
    return this.http.put<Niveau>(environment.baseUrl+'Niveaux/'+id,niveau);
  }
  deleteLevel(id:number){
    return this.http.delete(environment.baseUrl+'Niveaux/'+id)
  }
}
