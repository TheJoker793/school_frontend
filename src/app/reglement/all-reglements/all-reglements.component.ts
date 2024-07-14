import { Component, OnInit } from '@angular/core';
import { ReglementService } from '../../services/reglement.service';
import { Router } from '@angular/router';
import { Reglement } from '../../models/Models';

@Component({
  selector: 'app-all-reglements',
  templateUrl: './all-reglements.component.html',
  styleUrl: './all-reglements.component.css'
})
export class AllReglementsComponent implements OnInit{
  reglements:Reglement[]=[];
  constructor(private reglementService:ReglementService,
    private router:Router
  ){
  }
  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.reglementService.getAllReglements().subscribe(
      (data)=>{
        this.reglements=data;
      }
    )  
  }
  goAdd(){
    this.router.navigate(['reglements/add'])
  }
  goUpdate(reglement:Reglement){
    this.router.navigate(['reglements',reglement.id]);
  }
  deleteReglement(reglement:any){
    this.reglementService.deleteReglement(reglement.id).subscribe(
      ()=>this.refresh()
    )
  }

}
