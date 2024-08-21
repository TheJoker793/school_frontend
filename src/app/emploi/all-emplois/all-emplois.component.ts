import { Component, OnInit } from '@angular/core';
import { Emploi } from '../../models/Models';
import { EmploiService } from '../../services/emploi.service';

@Component({
  selector: 'app-all-emplois',
  templateUrl: './all-emplois.component.html',
  styleUrl: './all-emplois.component.css'
})
export class AllEmploisComponent implements OnInit {
  emplois:Emploi[]=[]
  constructor(private emploiService:EmploiService){

  }
  ngOnInit(): void {
    this.refresh()
  }
  refresh(){
    this.emploiService.getAllEmploi().subscribe(
      (data:Emploi[])=>{
        this.emplois=data
      }
    )
  }
  deleteEmploi(em:any){
    this.emploiService.deleteEmploi(em.id).subscribe(
      ()=>this.refresh()
    )

  }

}
