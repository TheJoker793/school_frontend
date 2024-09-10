import { Component, OnInit } from '@angular/core';
import { AnneeScolaire } from '../../models/Models';
import { AnneeScolaireService } from '../../services/annee-scolaire.service';

@Component({
  selector: 'app-all-seasons',
  templateUrl: './all-seasons.component.html',
  styleUrl: './all-seasons.component.css'
})
export class AllSeasonsComponent implements OnInit{
  seasons:AnneeScolaire[]=[]
  constructor(private seasonService:AnneeScolaireService){

  }
  ngOnInit(): void {
    
  }
  refresh(){
    this.seasonService.GetAllYears().subscribe(
      (data)=>{
        this.seasons=data;
      }
    )
  }

}
