import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DiplomeService } from '../../services/diplome.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-diplome',
  templateUrl: './update-diplome.component.html',
  styleUrl: './update-diplome.component.css'
})
export class UpdateDiplomeComponent implements OnInit{
  diplomeId!:number;
  diplomeForme!:FormGroup;
  constructor(private fb:FormBuilder,
    private diplomeService:DiplomeService,
    private activatedRoute:ActivatedRoute
  ){
    this.diplomeForme=this.fb.group({
      id:new FormControl(null),
      name:new FormControl(''),
      niveau:new FormControl(''),
      ecole:new FormControl(''),
      dateObtenir:new FormControl(''),
      professeurId:new FormControl(null),
    })

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parms)=>{
      this.diplomeId=parms['id'];
      this.diplomeService.getDiplomeById(this.diplomeId).subscribe(
        (data)=>{
          this.diplomeForme=this.fb.group({
            id:new FormControl(data.id),
            name:new FormControl(data.name),
            niveau:new FormControl(data.niveau),
            ecole:new FormControl(data.ecole),
            dateObtenir:new FormControl(data.dateObtenir),
            professeurId:new FormControl(data.professeurId)

          })
        }
      )


    }

    )
  };
  confirmUpdate(){
    this.diplomeService.updateDiplome(this.diplomeId,this.diplomeForme.value).subscribe(
      ()=>{
        console.log('updated successfully');
        
      }
    )
  }


}
