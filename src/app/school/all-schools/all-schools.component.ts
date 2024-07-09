import { Component, OnInit } from '@angular/core';
import { PreviousSchool } from '../../models/Models';
import { PreviousShoolService } from '../../services/previous-shool.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-schools',
  templateUrl: './all-schools.component.html',
  styleUrl: './all-schools.component.css'
})
export class AllSchoolsComponent implements OnInit {
  schools:PreviousSchool[]=[];
  constructor(private schoolService:PreviousShoolService,private router:Router){

  }
  ngOnInit(): void {
    this.refrech();
  }
  refrech(){
    this.schoolService.getAllSchools().subscribe(
      (data)=>{
        this.schools=data;
        console.log(this.schools);
        
      }
    )

  }
  addSchool(){
    this.router.navigate(['students/schools/add'])
  }
  deleteSchool(id:any){
    this.schoolService.deleteSchool(id).subscribe(

    )
  }
  goToUpdate(id:any){
    this.router.navigate(['students/schools',id])
  }

}
