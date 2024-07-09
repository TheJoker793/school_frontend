import { Component, Input, input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Student } from '../../models/Models';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AssiduiteService } from '../../services/assiduite.service';

@Component({
  selector: 'app-add-assiduite',
  templateUrl: './add-assiduite.component.html',
  styleUrl: './add-assiduite.component.css'
})
export class AddAssiduiteComponent  { 
@Output() studentId!:number;  
@Input() student!:Student;
studentForm:FormGroup;
temps:number[]=[];

dateDebutControl!:FormControl;
dateFinControl!:FormControl;
dateAssiduiteControl!:FormControl;
typeAssiduiteControl!:FormControl;
motifControl!:FormControl;
conditionTenir!:FormControl;
assiduiteForm:FormGroup;

constructor(private studentService:StudentService,
    private activatedRoute:ActivatedRoute,
     private fb:FormBuilder,
    private assiduiteService:AssiduiteService){
      for (let i = 8; i <= 17; i++) {
        this.temps.push(i);
      }

        this.studentForm=this.fb.group({
          matricule:new FormControl(''),
          firstName:new FormControl(''),
          lastName:new FormControl(''),
          gender:new FormControl('')

        }) ;

        this.dateDebutControl=fb.control('',Validators.required);
        this.dateFinControl=fb.control('',Validators.required);
        this.dateAssiduiteControl=fb.control('',Validators.required);
        this.typeAssiduiteControl=fb.control('',Validators.required);
        this.motifControl=fb.control('',Validators.required);
        this.conditionTenir=fb.control('');
        this.assiduiteForm=fb.group({
          dateDebut:this.dateDebutControl,
          dateFin:this.dateFinControl,
          dateAssiduite:this.dateAssiduiteControl,
          type:this.typeAssiduiteControl,
          motif:this.motifControl,
          conditionTenir:this.conditionTenir,
          studentId:this.studentId

        })     
    }
  
  
  onRefrech(){
    this.studentService.getStudentById(this.studentId).subscribe(
      (data)=>{
        
        this.studentForm=this.fb.group({
          matricule:new FormControl(data.matricule),
          firstName:new FormControl(data.firstName),
          lastName: new FormControl(data.lastName),
          gender:new FormControl(data.gender)
        });
        this.assiduiteForm.patchValue({ studentId: this.studentId }); 
        
      }
    ) 
  }
  onChangeStudentId(event:any){
    this.studentId=event.target.value;
    console.log(this.studentId);
    this.onRefrech()
  }
  addAssiduite(){
    
    this.assiduiteService.addAssiduite(this.assiduiteForm.value).subscribe(
      ()=>{
        console.log(this.assiduiteForm.value);
        
      
        console.log('added successfully');
        
      }
    )
  }

}
