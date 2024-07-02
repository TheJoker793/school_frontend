import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-professor',
  templateUrl: './main-professor.component.html',
  styleUrl: './main-professor.component.css'
})
export class MainProfessorComponent {
  constructor(private router:Router){

  }
  goToAdd(){
    this.router.navigate(['professors/add']);
  }
  goToList(){
    this.router.navigate(['professors/list']);
  }

}
