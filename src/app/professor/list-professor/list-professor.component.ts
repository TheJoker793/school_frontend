import { Component, OnInit } from '@angular/core';
import { Professor } from '../../models/Models';
import { ProfessorService } from '../../services/professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrl: './list-professor.component.css'
})
export class ListProfessorComponent implements OnInit {
  professors:Professor[]=[]
  constructor(private professorService:ProfessorService,private router:Router){

  }
  ngOnInit(): void {
    this.refresh()
  }
  refresh(){
    this.professorService.getAllProfessors().subscribe(
      (data)=>{
        this.professors=data;
      }
    )
  }
  getDetail(prof:Professor){
    this.router.navigate(["professors",prof.id])  
    
  }
  deleteProfessor(prof:any){
    this.professorService.deleteProfessor(prof.id).subscribe(
      ()=>{
        console.log("this professor is deleted successfully");
        
      }
    )
  }
  goToUpdate(id:any){
    this.router.navigate(["professors/update",id])
  }

}
