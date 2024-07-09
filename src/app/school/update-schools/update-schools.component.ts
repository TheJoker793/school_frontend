import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PreviousShoolService } from '../../services/previous-shool.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-schools',
  templateUrl: './update-schools.component.html',
  styleUrl: './update-schools.component.css'
})
export class UpdateSchoolsComponent implements OnInit{
  schoolForm!:FormGroup;
  schoolId!:number;
  constructor(private schoolService:PreviousShoolService,
    private fb:FormBuilder,
    private router:Router,
    private activatedRout:ActivatedRoute
  ){
    this.schoolForm=this.fb.group({
      id: new FormControl(null),
      name:new FormControl(''),
      type:new FormControl(''),
      status:new FormControl('')
    })
  }
  ngOnInit(): void {
    this.activatedRout.params.subscribe((params)=>{
      this.schoolId=params['id'];
      this.schoolService.getSchoolById(this.schoolId).subscribe(
        (data)=>{
          this.schoolForm=this.fb.group({
            id:data.id,
            name:data.name,
            type:data.type,
            status:data.status
          })
        }
      )
    })
  }
  conFirmUpdate(){
    this.schoolService.updateSchool(this.schoolId,this.schoolForm.value).subscribe(
      ()=>{
        console.log('school updated succesfully');
      }
    );
    this.router.navigate(['students/schools/']);
  }
 
}
