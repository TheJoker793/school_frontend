import { Component, OnInit } from '@angular/core';
import { Assiduite } from '../../models/Models';
import { AssiduiteService } from '../../services/assiduite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-assiduite',
  templateUrl: './list-assiduite.component.html',
  styleUrl: './list-assiduite.component.css'
})
export class ListAssiduiteComponent implements OnInit{
  assiduites:Assiduite[]=[]
  constructor(private service:AssiduiteService,private router:Router){

  }
  ngOnInit(): void {
    this.refrech();
  } 
  refrech(){
    this.service.getAllAssiduites().subscribe(
      (data)=>{
        this.assiduites=data;
        console.log(this.assiduites);
        
      }
    )
  }
  goToAdd(){
  this.router.navigate(["students/discipline/add"])    
  }
  goToUpdate(assiduite:Assiduite){
    this.router.navigate(["students/discipline",assiduite.id])
  }
  deleteAssiduite(assiduite:any){
    this.service.deleteAssiduite(assiduite.id).subscribe(
      ()=>{
        console.log("deleted successfully");
        
      }
    )
  }
}
