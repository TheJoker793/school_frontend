import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { parentStudent } from '../models/Models';

@Injectable({
  providedIn: 'root'
})
export class ParentStudentService {

  constructor(private http:HttpClient) { }
  getAllParentStudents(){
    return this.http.get<parentStudent[]>(environment.baseUrl+'ParentStudents/');
  }
  getParentStudentsById(id:number){
    return this.http.get<parentStudent>(environment.baseUrl+'ParentStudents/'+id);
  }
  addParentStudents(parent:parentStudent){
    return this.http.post<parentStudent>(environment.baseUrl+'ParentStudents/',parent);
  }
  updateParentStudents(id:number,parent:parentStudent){
    return this.http.put<parentStudent>(environment.baseUrl+'ParentStudents/'+id,parent);
  }
  deleteParentStudents(id:number){
    return this.http.delete(environment.baseUrl+'ParentStudents/'+id)
  }
}
