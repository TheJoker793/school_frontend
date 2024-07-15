import { Component, OnInit } from '@angular/core';
import { Frais } from '../../models/Models';
import { FraisService } from '../../services/frais.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-frais',
  templateUrl: './all-frais.component.html',
  styleUrl: './all-frais.component.css'
})
export class AllFraisComponent implements OnInit {
  frais:Frais[]=[];
  constructor(private fraisService:FraisService,private router:Router){

  }
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.fraisService.AllFrais().subscribe(
      (data)=>this.frais=data
    )
  }
  goAdd(){
    this.router.navigate(['frais/add'])
  }
  goUpdate(frais:Frais){
    this.router.navigate(['frais',frais.id])
  }
  deleteFrais(frais:any){
    this.fraisService.deleteFrais(frais.id).subscribe(
      ()=>this.refresh()
    )
  }

}
