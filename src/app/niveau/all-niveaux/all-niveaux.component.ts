import { Component, OnInit } from '@angular/core';
import { Niveau } from '../../models/Models';
import { NiveauService } from '../../services/niveau.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-niveaux',
  templateUrl: './all-niveaux.component.html',
  styleUrl: './all-niveaux.component.css'
})
export class AllNiveauxComponent implements OnInit {
  niveaux:Niveau[]=[]
  constructor(private niveauService:NiveauService,private router:Router){

  }
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.niveauService.getAllLevel().subscribe(
      (data)=>{
        this.niveaux=data;
      }
    )
  }
  deleteLevel(niveau:any){
    this.niveauService.deleteLevel(niveau.id).subscribe(
      ()=>{
        this.refresh()
      }
    )
  }
  goToUpdate(niveau:Niveau){
    this.router.navigate(['classes/niveaux',niveau.id])
  }

}
