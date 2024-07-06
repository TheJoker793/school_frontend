import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Frais } from '../models/Models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FraisService {

  constructor(private http:HttpClient) { }
  AllFrais(){
    return this.http.get<Frais[]>(environment.baseUrl+'Frais/')
  }
  getFraisById(id:number){
    return this.http.get<Frais>(environment.baseUrl+'Frais/'+id)
  }
  addFrais(frais:Frais){
    return this.http.post<Frais>(environment.baseUrl+'Frais/',frais)
  }
  updateFrais(id:number,frais:Frais){
    return this.http.put<Frais>(environment.baseUrl+'Frais/'+id,frais)
  }
  deleteFrais(id:number){
    return this.http.delete(environment.baseUrl+'Frais/'+id)
  }

}
