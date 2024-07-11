import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasseService } from '../../services/classe.service';
import { NiveauService } from '../../services/niveau.service';
import { Niveau } from '../../models/Models';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrl: './add-classe.component.css'
})
export class AddClasseComponent implements OnInit{
  niveaux:Niveau[]=[]
  nameControl!:FormControl;
  niveauIdControl!:FormControl;
  classForm:FormGroup
  constructor(fb:FormBuilder,
    private router:Router,
    private classService:ClasseService,
    private niveauService:NiveauService
  ){
    this.nameControl=fb.control('');
    this.niveauIdControl=fb.control('');
    this.classForm=fb.group({
      name:this.nameControl,
      niveauId:this.niveauIdControl
    })
  }
  ngOnInit(): void {
    this.allLevels();
  }
  allLevels(){
    this.niveauService.getAllLevel().subscribe(
      (data)=>{
        this.niveaux=data;
      }
    )
  }
  ajouterClasse(){
    console.log(this.classForm.value);
    
    this.classService.addClasse(this.classForm.value).subscribe(
      ()=>{
        this.router.navigate(['classes'])
      }
    )
  }

}
