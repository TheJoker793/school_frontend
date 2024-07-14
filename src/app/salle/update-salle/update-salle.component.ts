import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalleService } from '../../services/salle.service';

@Component({
  selector: 'app-update-salle',
  templateUrl: './update-salle.component.html',
  styleUrl: './update-salle.component.css'
})
export class UpdateSalleComponent implements OnInit{
  salleId!:number;
  SalleForm!:FormGroup
  constructor(private activated:ActivatedRoute,
    private router:Router,
    private fb:FormBuilder,
    private salleService:SalleService
){
  this.SalleForm=fb.group({
    id:new FormControl(null),
    numero:new FormControl(''),
    capacite:new FormControl(0),
  })
  }
  ngOnInit(): void {
    this.activated.params.subscribe((params)=>{
      this.salleId=params['id'];
      this.salleService.getSalleById(this.salleId).subscribe((data)=>{
        this.SalleForm=this.fb.group({
          id:data.id,
          numero:data.numero,
          capacite:data.capacite
        })
      })
    })
  }
  confirmationUpdate(){
    this.salleService.updateSalle(this.salleId,this.SalleForm.value).subscribe(
      ()=>this.router.navigate(['salles'])
    )
  }

}
