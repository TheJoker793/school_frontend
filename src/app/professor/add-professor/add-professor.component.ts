import { Component } from '@angular/core';
import { ProfessorService } from '../../services/professor.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrl: './add-professor.component.css'
})
export class AddProfessorComponent {
  firstNameControl:FormControl;
  lastNameControl:FormControl;
  dateOfBirthControl:FormControl;
  placeControl:FormControl;
  emailControl:FormControl;
  mobileControl:FormControl;
  genderControl:FormControl;
  addressControl:FormControl;
  professorForm:FormGroup;
  constructor(fb:FormBuilder,private professorService:ProfessorService,private router:Router){
    this.firstNameControl=fb.control('',Validators.required);
    this.lastNameControl=fb.control('',Validators.required);
    this.dateOfBirthControl=fb.control('',Validators.required);
    this.placeControl=fb.control('');
    this.emailControl=fb.control('')
    this.mobileControl=fb.control('');
    this.genderControl=fb.control('');
    this.addressControl=fb.control('');
    this.professorForm=fb.group({
      firstName:this.firstNameControl,
      lastName:this.lastNameControl,
      dateOfBirth:this.dateOfBirthControl,
      place:this.placeControl,
      email:this.emailControl,
      mobile:this.mobileControl,
      gender:this.genderControl,
      address:this.addressControl
    });
    


  }
  
addProfessor(){
  console.log(this.professorForm.value);
  this.professorService.addProfessor(this.professorForm.value).subscribe(
    ()=>{
      console.log('professor added successfully');
      
    }
  );
  this.router.navigate(['professors/list'])
  
}


  

}
