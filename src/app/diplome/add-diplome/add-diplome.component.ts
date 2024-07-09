import { Component, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DiplomeService } from '../../services/diplome.service';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-add-diplome',
  templateUrl: './add-diplome.component.html',
  styleUrl: './add-diplome.component.css'
})
export class AddDiplomeComponent {
@Output() professeurId!:number   
nameControl!:FormControl;
niveauControl!:FormControl;
ecoleControl!:FormControl;
dateObtenirControl!:FormControl;
diplomeForme:FormGroup;
profForm:FormGroup;
constructor(private fb:FormBuilder
  ,private diplomeService:DiplomeService
  ,private profService:ProfessorService){
    this.profForm=this.fb.group({
      firstName:new FormControl(''),
      lastName:new FormControl('')
      
    })

  this.nameControl=fb.control('',Validators.required);
  this.niveauControl=fb.control('',Validators.required);
  this.ecoleControl=fb.control('',Validators.required);
  this.dateObtenirControl=fb.control('',Validators.required);
  this.diplomeForme=fb.group({
    name:this.nameControl,
    niveau:this.niveauControl,
    ecole:this.ecoleControl,
    dateObtenir:this.dateObtenirControl,
    professeurId:this.professeurId
  })

}
onChangeProfessorId(event:any){
  this.professeurId=event.target.value;
  this.onRefrech();
}
onRefrech(){
  this.profService.getProfessorById(this.professeurId).subscribe(
    (data)=>{
      this.profForm=this.fb.group({
        firstName:new FormControl(data.firstName),
        lastName:new FormControl(data.lastName)
      });
      this.diplomeForme.patchValue({
        professeurId:this.professeurId
      })
    }

  )
}

ajoutDiplome(){
  this.diplomeService.addDiplome(this.diplomeForme.value).subscribe(
    ()=>{
     console.log('added succesfully');
      
    }
  )
  
}
}
