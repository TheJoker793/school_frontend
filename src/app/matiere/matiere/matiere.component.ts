import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Matiere } from '../../models/Models';
import { MatiereService } from '../../services/matiere.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrl: './matiere.component.css'
})
export class MatiereComponent implements OnInit{
  nameControl:FormControl;
  matiereGroup:FormGroup;
  matieres:Matiere[];
  constructor(private matiereService:MatiereService,fb:FormBuilder){
    this.matieres=[];
    this.nameControl=fb.control('');
    this.matiereGroup=fb.group({
      name:this.nameControl
    })
  }
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.matiereService.getAllMatieres().subscribe(
      (res)=>this.matieres=res
    )
  }
  deleteMatiere(matiere:any){
    this.matiereService.deleteMatiere(matiere.id).subscribe(
      ()=>{
        this.refresh();
      }
    );
    
  }
  ajouterMatiere(){
    console.log(this.matiereGroup.value);
    this.matiereService.addMatiere(this.matiereGroup.value).subscribe(
      ()=>{
        
        
        this.refresh();
        console.log("success");
        
      }
    )
  }




}
