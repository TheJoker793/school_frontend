import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/Models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent implements OnInit{
  students:Student[]=[]
  constructor(private studentService:StudentService,private router:Router){

  }
  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(
      (data:Student[])=>{
        this.students=data
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  getDetail(id:any){
    this.router.navigate(["students",id])
  }
  DeleteStudent(id:any){
    this.studentService.DeleteStudent(id).subscribe(
      ()=>console.log("student deleted successfully")
      
    )
  }

}
