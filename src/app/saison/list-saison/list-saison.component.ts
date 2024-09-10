import { Component, OnInit } from '@angular/core';
import { AnneeScolaire } from '../../models/Models';
import { AnneeScolaireService } from '../../services/annee-scolaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-saison',
  templateUrl: './list-saison.component.html',
  styleUrl: './list-saison.component.css'
})
export class ListSaisonComponent implements OnInit{
  saison:AnneeScolaire[]=[];
  constructor(private saisonService:AnneeScolaireService,private router:Router){}
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.saisonService.GetAllYears().subscribe(
      (data)=>this.saison=data
    )
  }
  goUpdate(saison:AnneeScolaire){
    this.router.navigate(['saisons/update',saison.id])
  }
  deleteSaison(){
    
  }


}
