import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { PreviousSchool } from '../../models/Models';
import { PreviousShoolService } from '../../services/previous-shool.service';
import { StudentClassComponent } from '../student-class/student-class/student-class.component';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
  
})
export class AddStudentComponent implements OnInit {
  showParent:boolean=false;
  @Output() studentId?:number;
  schools:PreviousSchool[]=[];
  matriculeControle:FormControl
  FirstNameControle:FormControl;
  lastNameConrole:FormControl;
  dateOfBirthControle:FormControl;
  placeControle:FormControl;
  genderControle:FormControl;
  addressControle:FormControl;
  pictureControle:FormControl;
  previousSchoolIdControl:FormControl;
  studentForm:FormGroup;
  showParents:boolean=false;
  showListClass:boolean=false;
  
  constructor(
    fb:FormBuilder,
    private studentService:StudentService,
    private schoolService:PreviousShoolService,
    private router:Router
  ){
    this.matriculeControle=fb.control('',Validators.required);
    this.FirstNameControle=fb.control('',Validators.required);
    this.lastNameConrole=fb.control('',Validators.required);
    this.dateOfBirthControle=fb.control('',Validators.required);
    this.placeControle=fb.control('');
    this.genderControle=fb.control('',Validators.required);
    this.addressControle=fb.control('');
    this.pictureControle=fb.control('');
    this.previousSchoolIdControl=fb.control('');
    this.studentForm=fb.group({
      matricule:this.matriculeControle,
      firstName:this.FirstNameControle,
      lastName:this.lastNameConrole,
      dateOfBirth:this.dateOfBirthControle,
      place:this.placeControle,
      gender:this.genderControle,
      address:this.addressControle,
      picture:this.pictureControle,
      previousSchoolId:this.previousSchoolIdControl
    })
  }
  ngOnInit(): void {
    this.allSchools();
  };
  allSchools(){
    this.schoolService.getAllSchools().subscribe(
      (data)=>{
        this.schools=data;
        console.log(this.schools);
        
      }
    )
  }

  addStudent(){
    console.log(this.studentForm.value);
    this.studentService.AddStudent(this.studentForm.value).subscribe(
      (res)=>{
        this.studentId=res.id
      }
    )
    //this.router.navigate(["students/add/parents"]);    
  }
  

}
