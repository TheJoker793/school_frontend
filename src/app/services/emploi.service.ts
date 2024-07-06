import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emploi } from '../models/Models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {

  constructor(private http:HttpClient) { }
  getAllEmploi(){
    return this.http.get<Emploi[]>(environment.baseUrl+'Emplois/');
  }
  getEmploiById(id:number){
    return this.http.get<Emploi>(environment.baseUrl+'Emplois/'+id);
  }
  addEmploi(emploi:Emploi){
    return this.http.post<Emploi>(environment.baseUrl+'Emplois/',emploi);
  }
  updateEmploi(id:number,emploi:Emploi){
    return this.http.put<Emploi>(environment.baseUrl+'Emplois/'+id,emploi)
  }
  deleteEmploi(id:any){
    return this.http.delete(environment.baseUrl+'Emplois/'+id)
  }
}
