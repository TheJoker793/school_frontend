import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PreviousSchool } from '../models/Models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PreviousShoolService {

  constructor(private http:HttpClient) { }
  getAllSchools(){
    return this.http.get<PreviousSchool[]>(environment.baseUrl+'PreviousSchools/');
  }
  getSchoolById(id:number){
    return this.http.get<PreviousSchool>(environment.baseUrl+'PreviousSchools/'+id);
  }
  addSchool(ps:PreviousSchool){
    return this.http.post<PreviousSchool>(environment.baseUrl+'PreviousSchools/',ps);
  }
  updateSchool(id:number,ps:PreviousSchool){
    return this.http.put<PreviousSchool>(environment.baseUrl+'PreviousSchools/'+id,ps);
  }
  deleteSchool(id:number){
    return this.http.delete(environment.baseUrl+'PreviousSchools/'+id)
  }

}
