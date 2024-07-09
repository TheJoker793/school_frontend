import { Component, OnInit } from '@angular/core';
import { Diplome } from '../../models/Models';
import { DiplomeService } from '../../services/diplome.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-diplome',
  templateUrl: './all-diplome.component.html',
  styleUrl: './all-diplome.component.css'
})
export class AllDiplomeComponent implements OnInit{
  diplomes:Diplome[]=[]
  
  constructor(private diplomeService:DiplomeService,private router:Router) {  
  }
  ngOnInit(): void {
    this.diplomeService.getAllDiplome().subscribe(
      (data)=>{
        this.diplomes=data;
        console.log(this.diplomes);
        
      }
    )
  }
  addDiplome(){
    this.router.navigate(['professors/diplome/add']);
  }
  deleteDiplome(diplome:any){
    this.diplomeService.deleteDiplome(diplome.id).subscribe(
      ()=>{
        console.log('deleted successfully');
        
      }
      
    )
  }
  goToUpdate(diplome:Diplome){
    this.router.navigate(['professors/diplome',diplome.id])    
  }

}
