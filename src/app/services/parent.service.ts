import { Injectable } from '@angular/core';
import { Parent } from '../models/Models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http:HttpClient) { }
  getAllParent(){
    return this.http.get<Parent[]>(environment.baseUrl+'Parents/');
  }
  getParentById(id:number){
    return this.http.get<Parent>(environment.baseUrl+'Parents/'+id);
  }
  getParentByCin(cin:string){
    return this.http.get<Parent>(environment.baseUrl+'Parents/cin/'+cin)
  }
  addParent(parent:Parent){
    return this.http.post<Parent>(environment.baseUrl+'Parents/',parent);
  }
  updateParent(id:number,parent:Parent){
    return this.http.put<Parent>(environment.baseUrl+'Parents/'+id,parent);
  }
  deleteParent(id:number){
    return this.http.delete(environment.baseUrl+'Parents/'+id)
  }
}
