import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assiduite } from '../models/Models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AssiduiteService {

  constructor(private http:HttpClient) { }
  getAllAssiduites(){
    return this.http.get<Assiduite[]>(environment.baseUrl+'Assiduites/')
  }
  getAssiduiteById(id:number){
    return this.http.get<Assiduite>(environment.baseUrl+'Assiduites/'+id)
  }
  addAssiduite(assiduite:Assiduite){
    return this.http.post<Assiduite>(environment.baseUrl+'Assiduites/',assiduite)
  }
  updateAssiduite(id:number,assiduite:Assiduite){
    return this.http.put<Assiduite>(environment.baseUrl+'Assiduites/'+id,assiduite);
  }
  deleteAssiduite(id:number){
    return this.http.delete(environment.baseUrl+'Assiduites/'+id)
  }
}
