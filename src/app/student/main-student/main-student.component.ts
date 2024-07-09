import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-student',
  templateUrl: './main-student.component.html',
  styleUrl: './main-student.component.css'
})
export class MainStudentComponent {
  constructor(private router:Router){

  }
  goToAdd(){
    this.router.navigate(["students/add"])
  }
  goToList(){
    this.router.navigate(["students/list"])
  }
  goToSchools(){
    this.router.navigate(["students/schools"])
  }
  goToDiscipline(){
    this.router.navigate(['students/discipline'])
  }

}
