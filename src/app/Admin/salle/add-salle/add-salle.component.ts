import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SalleService } from '../../../services/salle.service';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrl: './add-salle.component.css'
})
export class AddSalleComponent {
  numeroForm!:FormControl;
  capaciteForm!:FormControl;
  SalleForm:FormGroup;
  constructor(fb:FormBuilder,private salleService:SalleService,private router:Router){
    this.numeroForm=fb.control('');
    this.capaciteForm=fb.control(0);
    this.SalleForm=fb.group({
      numero:this.numeroForm,
      capacite:this.capaciteForm
    });
  } ;
  addSalle(){
    this.salleService.addSalle(this.SalleForm.value).subscribe(
      ()=>{
        this.router.navigate(['salles'])
      }
    )
  }

}
