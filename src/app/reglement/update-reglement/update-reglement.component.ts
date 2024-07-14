import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReglementService } from '../../services/reglement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-reglement',
  templateUrl: './update-reglement.component.html',
  styleUrl: './update-reglement.component.css'
})
export class UpdateReglementComponent implements OnInit{
  reglementId!:number;
  reglementForm:FormGroup;
  readonly mois=['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre']

  constructor(private fb:FormBuilder,private regService:ReglementService,
    private router:Router,private ActiveRoute:ActivatedRoute){
      this.reglementForm=this.fb.group({
        id:new FormControl(null),
        montant:new FormControl(0),
        dateReglement:new FormControl(''),
        modePaiement:new FormControl(''),
        dateEcheance:new FormControl(''),
        moisRegler:new FormControl(''),
        studentId:new FormControl(null)
      })
  }
  ngOnInit(): void {
    this.ActiveRoute.params.subscribe((params)=>{
      this.reglementId=params['id'];
      
      
      this.regService.getReglementById(this.reglementId).subscribe(
        (data)=>{
          this.reglementForm=this.fb.group({
            id:data.id,
            montant:data.montant,
            dateReglement:data.dateReglement,
            modePaiement:data.modePaiement,
            dateEcheance:data.dateEcheance,
            moisRegler:data.moisRegler,
            studentId:data.studentId

          })
        }
      )
    })
  }
  confirmUpdate(){
    console.log(this.reglementId,this.reglementForm.value);
    
    this.regService.updateReglement(this.reglementId,this.reglementForm.value).subscribe(
      ()=>this.router.navigate(['reglements'])
    )
  }

}
