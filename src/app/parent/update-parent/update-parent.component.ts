import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ParentService } from '../../services/parent.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-parent',
  templateUrl: './update-parent.component.html',
  styleUrl: './update-parent.component.css'
})
export class UpdateParentComponent implements OnInit {
  parentId!: number;
  parentForm!: FormGroup;
  constructor(private fb: FormBuilder, private parentService: ParentService,
     private activatedRoute: ActivatedRoute,private router:Router) {
    this.parentForm = fb.group({
      id:this.fb.control(null),
      cin: this.fb.control(null),
      firstName: this.fb.control(null),
      lastName: this.fb.control(null),
      datOfBirth: this.fb.control(null),
      place: this.fb.control(null),
      function: this.fb.control(null),
      mobile: this.fb.control(null),
    })

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.parentId = params['id'];
        this.parentService.getParentById(this.parentId).subscribe(
          (data) => {
            this.parentForm = this.fb.group({
              id:new FormControl(data.id),
              cin: new FormControl(data.cin),
              firstName: new FormControl(data.firstName),
              lastName: new FormControl(data.lastName),
              datOfBirth: new FormControl(data.datOfBirth),
              place: new FormControl(data.place),
              function: new FormControl(data.function),
              mobile: new FormControl(data.mobile),

            })
          }
        )
      }
    )
  }

  confirmUpdate() { 
    this.parentService.updateParent(this.parentId,this.parentForm.value).subscribe(
      ()=>{
        this.router.navigate(['parents/list'])
      }
    )
  }

}
