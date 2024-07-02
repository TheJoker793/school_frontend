import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
baseUrl:string="https://localhost:7020/api/"
  constructor(private http:HttpClient) { }
  getAllStudents(){
    return this.http.get<Student[]>(this.baseUrl+"Students/")
  }
  getStudentById(id:number){
   return this.http.get<Student>(this.baseUrl+"Students/"+id)
  }
  AddStudent(student:Student){
    return this.http.post<Student>(this.baseUrl+"Students/",student)
  }
  UpdateStudent(id:number,student:Student){
    return this.http.put<Student>(this.baseUrl+"Students/"+id,student)
  }
  DeleteStudent(id:number){
    return this.http.delete(this.baseUrl+"Students/"+id)
  }
}
