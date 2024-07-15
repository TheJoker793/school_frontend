import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReglementService } from '../../services/reglement.service';
import { Router } from '@angular/router';
import { Niveau } from '../../models/Models';
import { NiveauService } from '../../services/niveau.service';
import { FraisService } from '../../services/frais.service';

@Component({
  selector: 'app-add-frais',
  templateUrl: './add-frais.component.html',
  styleUrl: './add-frais.component.css'
})
export class AddFraisComponent implements OnInit{
niveaux:Niveau[]=[];
reglementControl!:FormControl;
niveauControl!:FormControl;
typeControl!:FormControl;
frais1Control!:FormControl;
frais2Control!:FormControl;
frais3Control!:FormControl;
fraisForm:FormGroup

  constructor(fb:FormBuilder,private fraisService:FraisService,private router:Router,private niveauService:NiveauService){
   this.reglementControl=fb.control(null);
   this.niveauControl=fb.control(null);
   this.typeControl=fb.control('');
   this.frais1Control=fb.control('');
   this.frais2Control=fb.control('');
   this.frais3Control=fb.control('');
   this.fraisForm=fb.group({
    reglementId:this.reglementControl,
    niveauId:this.niveauControl,
    type:this.typeControl,
    frais1:this.frais1Control,
    frais2:this.frais2Control,
    frais3:this.frais3Control

   })

}
  ngOnInit(): void {
    this.niveauService.getAllLevel().subscribe(
      (data)=>{this.niveaux=data}
    )
  }
addingFrais(){
  console.log(this.fraisForm.value);
  
  this.fraisService.addFrais(this.fraisForm.value).subscribe(
    ()=>this.router.navigate(['frais'])
  )
}
}
