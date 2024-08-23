import { Component, OnInit } from '@angular/core';
import { Classe, Niveau } from '../../../models/Models';
import { NiveauService } from '../../../services/niveau.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClasseService } from '../../../services/classe.service';
import { AnneeScolaireService } from '../../../services/annee-scolaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-class',
  templateUrl: './student-class.component.html',
  styleUrl: './student-class.component.css',
})
export class StudentClassComponent implements OnInit{
niveax:Niveau[]=[];
classes:Classe[]=[];
//classControl:FormControl;
niveauId!:number;
classeId!:number;
dateDebutControl:FormControl;
dateFinControl:FormControl;
student:any;
FormClassStudent:FormGroup;
constructor(private niveauService:NiveauService, fb:FormBuilder,
  private classService:ClasseService,private seasonService:AnneeScolaireService,
private router:Router){
  //this.classControl=fb.control(null);
  this.dateDebutControl=fb.control('');
  this.dateFinControl=fb.control('');
  
  this.student= localStorage.getItem("student");
  const studentId=Number(this.student);
  console.log(studentId);
  
  this.FormClassStudent=fb.group({
    dateDebut:this.dateDebutControl,
    dateFin:this.dateFinControl,
    classeId:this.classeId,
    studentId:studentId
  })

}
loadLevel(){
  this.niveauService.getAllLevel().subscribe(
    (data:Niveau[])=>this.niveax=data
  )
}

  ngOnInit(): void {
    this.loadLevel()
  }
  onChangeNiveau(event:any){
    this.niveauId=event.target.value;
    

    this.classService.getClasseByNiveau(this.niveauId).subscribe(
      (data)=>{
        this.classes=data;
        
      }
        
    )

  }
  onChangeClasse(event:any){
    this.classeId=event.target.value;
    this.FormClassStudent.patchValue({
      classeId:this.classeId
    });
    console.log(this.classeId);
    
  }
  inscrire(){
    console.log(this.FormClassStudent.value);

    this.seasonService.addYear(this.FormClassStudent.value).subscribe(
      ()=>{
        
        this.router.navigate(['students/list'])
      }
    )
  }

}
