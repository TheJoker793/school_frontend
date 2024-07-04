import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProfessorService } from '../../services/professor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Professor } from '../../models/Models';

@Component({
  selector: 'app-update-professor',
  templateUrl: './update-professor.component.html',
  styleUrl: './update-professor.component.css'
})
export class UpdateProfessorComponent implements OnInit{
  professorForm!:FormGroup;
  professorId!:number;
  constructor(private professorService:ProfessorService,
    private activatedRoute:ActivatedRoute,
    private fb:FormBuilder,
    private router:Router
  ){
    this.professorForm=this.fb.group({
      id:new FormControl(null),
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      dateOfBirth:new FormControl(''),
      place:new FormControl(''),
      email:new FormControl(''),
      mobile:new FormControl(''),
      gender:new FormControl(''),
      address:new FormControl('')
    })
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.professorId=params['id'];
      this.professorService.getProfessorById(this.professorId).subscribe((data)=>{
        this.professorForm=this.fb.group({
          id:data.id,
          firstName:data.firstName,
          lastName:data.lastName,
          dateOfBirth:data.dateOfBirth,
          place:data.place,
          email:data.email,
          mobile:data.mobile,
          gender:data.gender,
          address:data.address

        })
      }

      )

    })
  };
  confirmUpdate(){
    const professor:Professor=this.professorForm.value;
    this.professorService.updateProfessor(this.professorId,professor).subscribe(
      ()=>{
        console.log('professor updated succesfully');
        
      }
    );
    this.router.navigate(['professors/list'])
  }



}
