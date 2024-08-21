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
FormClassStudent!:FormGroup;
constructor(private niveauService:NiveauService,private fb:FormBuilder,
  private classService:ClasseService,private seasonService:AnneeScolaireService,
private router:Router){
  //this.classControl=fb.control(null);
  this.dateDebutControl=fb.control('');
  this.dateFinControl=fb.control('');
  
  this.student=localStorage.getItem("student");
  const studentId=this.student.id;
  this.FormClassStudent=fb.group({
    dateDebut:this.dateDebutControl,
    dateFin:this.dateFinControl,
    classId:this.classeId,
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
  onChange(event:any){
    this.niveauId=event.target.value;
    this.classService.getClasseByNiveau(this.niveauId).subscribe(
      (data)=>this.classes=data
    )

  }
  inscrire(){
    this.seasonService.addYear(this.FormClassStudent.value).subscribe(
      ()=>{
        this.router.navigate(['students/list'])
      }
    )
  }

}
