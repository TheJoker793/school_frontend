import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NiveauService } from '../../../services/niveau.service';

@Component({
  selector: 'app-add-niveaux',
  templateUrl: './add-niveaux.component.html',
  styleUrl: './add-niveaux.component.css'
})
export class AddNiveauxComponent {
  libelleForm!:FormControl;
  optionForm!:FormControl;
  capaciteForm!:FormControl;
  niveauForme:FormGroup;
  constructor(fb:FormBuilder,private niveauService:NiveauService,private router:Router){
    
      this.libelleForm=new FormControl('');
      this.optionForm=new FormControl('');
      this.capaciteForm=new FormControl(0);
      this.niveauForme=fb.group({
        libelle:this.libelleForm,
        option:this.optionForm,
        capacite:this.capaciteForm
      })
  }
  addLevel(){
    this.niveauService.addLevel(this.niveauForme.value).subscribe(
      ()=>{
        console.log('succes');
        
        this.router.navigate(['classes/niveaux'])
      }
    )
  }

}
