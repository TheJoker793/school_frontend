import { Component, OnInit } from '@angular/core';
import { AssiduiteService } from '../../services/assiduite.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Assiduite } from '../../models/Models';

@Component({
  selector: 'app-update-assiduite',
  templateUrl: './update-assiduite.component.html',
  styleUrl: './update-assiduite.component.css'
})
export class UpdateAssiduiteComponent implements OnInit{
  assiduiteId!:number;
  assiduiteForme!:FormGroup;
  constructor(private assiduiteService:AssiduiteService,
    private activatedRoute:ActivatedRoute,
    private fb:FormBuilder
  ){
    this.assiduiteForme= this.fb.group({
      id:new FormControl(null),
      dateDebut:new FormControl('',Validators.required),
      dateFin:new FormControl(''),
      dateAssiduite:new FormControl('',Validators.required),
      type:new FormControl(''),
      motif:new FormControl(''),
      conditionTenir:new FormControl(''),
      studentId:new FormControl(null) 

    })

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.assiduiteId=params['id'];
      this.assiduiteService.getAssiduiteById(this.assiduiteId).subscribe(
        (data)=>{
          console.log(data);
           
          this.assiduiteForme=this.fb.group({
            id:new FormControl(data.id),
            dateDebut:new FormControl(data.dateDebut),
            dateFin:new FormControl(data.dateFin),
            dateAssiduite:new FormControl(data.dateAssiduite),
            type:new FormControl(data.type),
            motif:new FormControl(data.motif),
            conditionTenir:new FormControl(data.conditionTenir)
          })
        }
      )
      
    });
    console.log(this.assiduiteForme.value);
    
  }
  confirmeUpdate(){
    const assiduite:Assiduite=this.assiduiteForme.value;
    this.assiduiteService.updateAssiduite(this.assiduiteId,assiduite)
  }

}
