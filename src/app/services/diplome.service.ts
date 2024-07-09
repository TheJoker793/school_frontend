import { Injectable } from '@angular/core';
import { Diplome } from '../models/Models';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {

  constructor(private http:HttpClient) { }
  getAllDiplome(){
    return this.http.get<Diplome[]>(environment.baseUrl+'Diplomes/');
  }
  getDiplomeById(id:number){
    return this.http.get<Diplome>(environment.baseUrl+'Diplomes/'+id);
  }
  addDiplome(diplome:Diplome){
    return this.http.post<Diplome>(environment.baseUrl+'Diplomes/',diplome);
  }
  updateDiplome(id:number,diplome:Diplome){
    return this.http.put<Diplome>(environment.baseUrl+'Diplomes/'+id,diplome);
  }
  deleteDiplome(id:number){
    return this.http.delete(environment.baseUrl+'Diplomes/'+id)
  }
}
