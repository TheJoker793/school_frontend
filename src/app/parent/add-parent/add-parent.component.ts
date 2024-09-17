import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ParentService } from '../../services/parent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-parent',
  templateUrl: './add-parent.component.html',
  styleUrl: './add-parent.component.css'
})
export class AddParentComponent {
  cinControl:FormControl;
  firstControl:FormControl;
  lastControl:FormControl;
  dateControl:FormControl;
  placeControl:FormControl;
  mobileControl:FormControl;
  functionControl:FormControl;
  parentForm:FormGroup;
  constructor(fb:FormBuilder,private parentService:ParentService,private router:Router){
    this.cinControl=fb.control('');
    this.firstControl=fb.control('');
    this.lastControl=fb.control('');
    this.dateControl=fb.control('');
    this.placeControl=fb.control('');
    this.mobileControl=fb.control('');
    this.functionControl=fb.control('');
    this.parentForm=fb.group({
      cin:fb.control(null),
      firstName:fb.control(null),
      lastName:fb.control(null),
      datOfBirth:fb.control(null),
      place:fb.control(null),
      function:fb.control(null),
      mobile:fb.control(null),
    })
  }
  addNewParent(){
    this.parentService.addParent(this.parentForm.value).subscribe(
      ()=>{
        this.router.navigate(['parents/list'])
      }
    )
  }

}
