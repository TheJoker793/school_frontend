import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PreviousSchool } from '../../models/Models';
import { PreviousShoolService } from '../../services/previous-shool.service';

@Component({
  selector: 'app-add-schools',
  templateUrl: './add-schools.component.html',
  styleUrl: './add-schools.component.css'
})
export class AddSchoolsComponent {
nameControle:FormControl;
typeControl:FormControl;
statusControl:FormControl;
SchoolForm:FormGroup;
  constructor(private router:Router, fb:FormBuilder,private schoolService:PreviousShoolService){
    this.nameControle=new FormControl('');
    this.typeControl=new FormControl('');
    this.statusControl=new FormControl('');
    this.SchoolForm=fb.group({
      name:this.nameControle,
      type:this.typeControl,
      status:this.statusControl
    })
  }
  ajouter(){
    this.schoolService.addSchool(this.SchoolForm.value).subscribe();
    this.retouner();
  }
retouner(){
  this.router.navigate(['students/schools'])
}

}
