import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reglement } from '../models/Models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReglementService {

  constructor(private http:HttpClient) { }
  getAllReglements(){
    return this.http.get<Reglement[]>(environment.baseUrl+'Reglements/');
  }
  getReglementById(id:number){
    return this.http.get<Reglement>(environment.baseUrl+'Reglements/'+id);
  }
  addReglement(reglement:Reglement){
    return this.http.post<Reglement>(environment.baseUrl+'Reglements/',reglement);
  }
  updateReglement(id:number,reglement:Reglement){
    return this.http.post<Reglement>(environment.baseUrl+'Reglements/'+id,reglement);
  }
  deleteReglement(id:number){
    return this.http.delete(environment.baseUrl+'Reglements/'+id);
  }

}
