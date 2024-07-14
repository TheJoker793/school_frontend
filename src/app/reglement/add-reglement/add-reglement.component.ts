import { Component, OnInit, Output } from '@angular/core';
import { ReglementService } from '../../services/reglement.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-reglement',
  templateUrl: './add-reglement.component.html',
  styleUrl: './add-reglement.component.css'
})
export class AddReglementComponent {

@Output() studentId!:number;
studentForm:FormGroup;
montantForm!:FormControl;
dateReglementForm!:FormControl;
modePaiementForm!:FormControl;
dateEcheanceForm!:FormControl;
moisReglerForm!:FormControl;
reglementForm:FormGroup;
readonly mois=['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre']



  constructor(private regService:ReglementService,
    

    private studService:StudentService,
    private router:Router,
  private fb:FormBuilder) 
  {
    
    
    this.studentForm=this.fb.group({
      matricule:new FormControl(''),
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      gender:new FormControl('')

    }) ;
    this.montantForm=fb.control(0);
    this.dateReglementForm=fb.control('');
    this.modePaiementForm=fb.control('');
    this.dateEcheanceForm=fb.control('');
    this.moisReglerForm=fb.control('');
    this.reglementForm=fb.group({
      montant:this.montantForm,
      dateReglement:this.dateReglementForm,
      modePaiement:this.modePaiementForm,
      dateEcheance:this.dateEcheanceForm,
      moisRegler:this.moisReglerForm,
      studentId:this.studentId
    })

  }
  
  refresh(){
    this.studService.getStudentById(this.studentId).subscribe(
      (data)=>{
        this.studentForm=this.fb.group({
          matricule:new FormControl(data.matricule),
          firstName:new FormControl(data.firstName),
          lastName:new FormControl(data.lastName)
        })
      }
    );
    this.reglementForm.patchValue({studentId:this.studentId});
  }
  onChangeStudentId(event:any){
    this.studentId=event.target.value;
    
    this.refresh();
  }
  addReglement(){
    this.regService.addReglement(this.reglementForm.value).subscribe(
      ()=>{
        this.router.navigate(['reglements'])
      }
    )
  }

}
