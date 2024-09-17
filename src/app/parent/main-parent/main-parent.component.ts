import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-parent',
  templateUrl: './main-parent.component.html',
  styleUrl: './main-parent.component.css'
})
export class MainParentComponent {
  constructor(private router:Router){

  }
  goList(){
    this.router.navigate(['parents/list'])
  }
  goAdd(){
    this.router.navigate(['parents/add'])
  }

}
