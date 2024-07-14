import { Component, OnInit } from '@angular/core';
import { Salle } from '../../models/Models';
import { SalleService } from '../../services/salle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-salle',
  templateUrl: './all-salle.component.html',
  styleUrl: './all-salle.component.css'
})
export class AllSalleComponent implements OnInit{
  salles:Salle[]=[];
  constructor(private salleService:SalleService,private router:Router){

  }
  ngOnInit(): void {
    this.refresh()  
  }
  refresh(){
    this.salleService.getAlSalles().subscribe(
      (data)=>{
        this.salles=data;
      }
    )
  }
  goAdd(){
    this.router.navigate(['salles/add'])
  }
  goUpdate(salle:Salle){
    this.router.navigate(['salles',salle.id])
  }
  Delete(salle:any){
    this.salleService.deleteSalle(salle.id).subscribe(
      ()=>this.router.navigate(['salles'])
    )
  }

}
