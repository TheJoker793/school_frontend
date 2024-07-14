import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/Models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http:HttpClient) { }
  getAllStudents(){
    return this.http.get<Student[]>(environment.baseUrl+"Students/")
  }
  getStudentById(id:number){
   return this.http.get<Student>(environment.baseUrl+"Students/"+id)
  }
  AddStudent(student:Student){
    return this.http.post<Student>(environment.baseUrl+"Students/",student)
  }
  UpdateStudent(id:number,student:Student){
    return this.http.put<Student>(environment.baseUrl+"Students/"+id,student)
  }
  DeleteStudent(id:number){
    return this.http.delete(environment.baseUrl+"Students/"+id)
  } 
}
