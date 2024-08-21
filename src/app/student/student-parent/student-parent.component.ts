import { Component } from '@angular/core';
import { ParentService } from '../../services/parent.service';
import { ParentStudentService } from '../../services/parent-student.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-parent',
  templateUrl: './student-parent.component.html',
  styleUrl: './student-parent.component.css'
})
export class StudentParentComponent {
  cin!:string;
  fullNameParent:string="";
  studentId:number;
  parentId?:number; 
  liens:string[];
  studentControl:FormControl;
  parentControl:FormControl;
  lienParenteControl:FormControl;
  lienForm:FormGroup;
   constructor(private parentService:ParentService,
    private parentStudentService:ParentStudentService,fb:FormBuilder){
    this.liens=['Pere','Mere','Oncle','Tante','GrandPere','GrandMere','Frere','Soeur','Autre']
    this.studentId=Number (localStorage.getItem("student"))
    this.parentControl=fb.control(null);
    this.studentControl=fb.control(null);
    this.lienParenteControl=fb.control('')  
    this.lienForm=fb.group({
        parentId:this.parentControl,
        studentId:this.studentControl,
        lienParente:this.lienParenteControl
      })
  } 
   
   getFullNameParent(){
    this.parentService.getParentByCin(this.cin).subscribe(
      (res)=>{
        this.fullNameParent=res.firstName+' '+res.lastName;
        this.parentId=res.id
      }
    )
   }
   onChange(event:any){
    this.cin=event.target.value;
    this.getFullNameParent();
   }
   submitParent(){
    this.parentStudentService.addParentStudents(this.lienForm.value).subscribe()
   }



}
