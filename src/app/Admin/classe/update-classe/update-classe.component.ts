import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Niveau } from '../../../models/Models';
import { ClasseService } from '../../../services/classe.service';
import { NiveauService } from '../../../services/niveau.service';

@Component({
  selector: 'app-update-classe',
  templateUrl: './update-classe.component.html',
  styleUrl: './update-classe.component.css'
})
export class UpdateClasseComponent implements OnInit{
  classeId!:number;
  classForm!:FormGroup;
  niveaux:Niveau[]=[];
  niveauId!:number;
  
  constructor(private classeService:ClasseService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private fb:FormBuilder,
    private niveauService:NiveauService
  ){
    this.classForm=this.fb.group({
      id:new FormControl(null),
      name:new FormControl(''),
      niveauId:new FormControl(null)
    })

  }
  ngOnInit(): void {
    this.niveauService.getAllLevel().subscribe(
      (data)=>this.niveaux=data
    )
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.classeId=params['id'];
        this.classeService.getClasseById(this.classeId).subscribe(
          (data)=>{
            this.classForm=this.fb.group({
              id:data.id,
              name:data.name,
              niveauId:data.niveauId
            })
          }
        )
      }
    )
  }
  onChange(event:any){
    this.niveauId=event.target.value;
    console.log(this.niveauId);
    

  }
confirmUpdate(){
  console.log(this.classeId,this.classForm.value);
  
  this.classeService.updateClasse(this.classeId,this.classForm.value).subscribe(
    ()=>{
      this.router.navigate(['classes'])
      
    }
  )
}
  

}
