import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Classe } from '../../../models/Models';
import { ClasseService } from '../../../services/classe.service';

@Component({
  selector: 'app-all-classes',
  templateUrl: './all-classes.component.html',
  styleUrl: './all-classes.component.css'
})
export class AllClassesComponent implements OnInit{
  classes:Classe[]=[];
  constructor(private classeService:ClasseService,private router:Router){

  }
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.classeService.getAllClasse().subscribe(
      (data)=>{
        this.classes=data;
      }
    )
  }
  goAdd(){
    this.router.navigate(['classes/add']);
  }
  goUpdate(classe:Classe){
    this.router.navigate(['classes',classe.id]);
  }  
  deleteClasse(classe: any) {
    this.classeService.deleteClasse(classe.id).subscribe(
      ()=>{
        this.refresh();
      }
    )
}
goLevel(){
  this.router.navigate(['classes/niveaux'])
}






} 
