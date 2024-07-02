import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrl: './detail-student.component.css'
})
export class DetailStudentComponent implements OnInit{
  
  studentId!:number;
  matricule!:string;
  firstName!:string;
  lastName!:string;
  dateOfBirth!:Date;
  place!:string;
  gender!:string;
  address!:string;
  picture!:string;
  previousSchoolId!:number|null
  constructor(private route:ActivatedRoute,
    private studentService:StudentService,
    private router:Router){

  }
  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
        this.studentId=params['id'];
        this.studentService.getStudentById(this.studentId).subscribe(
          data=>{
            this.matricule=data.matricule;
            this.firstName=data.firstName;
            this.lastName=data.lastName;
            this.dateOfBirth=data.dateOfBirth;
            this.place=data.place;
            this.gender=data.gender;
            this.address=data.address;
            this.previousSchoolId=data?.previousSchoolId??null


          }

        )

      }
    )
  }
  returnList(){
    this.router.navigate(["students/list"])
  }

}
