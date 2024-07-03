import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../models/Models';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent implements OnInit {
  studentForm!: FormGroup;
  studentId!: number;

  constructor(
    private studentService: StudentService,
  private activatedRoute: ActivatedRoute,
  private fb: FormBuilder

  ) {
    this.studentForm = this.fb.group({
      id: new FormControl(null), // Set initial value to null
      matricule: new FormControl('', ),
      firstName: new FormControl('', ),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl(null),
      place: new FormControl(''),
      gender: new FormControl(''),
      address: new FormControl(''),
      picture: new FormControl(''),
      previousSchoolId: new FormControl(null),
    });
  
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.studentId = params['id'];
      this.studentService.getStudentById(this.studentId).subscribe((data) => {
        this.studentForm = this.fb.group({
          id: new FormControl(data.id), 
          matricule: new FormControl(data.matricule, ),
          firstName: new FormControl(data.firstName, ),
          lastName: new FormControl(data.lastName, ),
          dateOfBirth: new FormControl(data.dateOfBirth),
          place: new FormControl(data.place, ),
          gender: new FormControl(data.gender),
          address: new FormControl(data.address),
          picture: new FormControl(data.picture),
          previousSchoolId: new FormControl(data.previousSchoolId),
        });
      });
    });
  }

  confirmUpdate() {
    // Access form values and call update service
    
      const student: Student = this.studentForm.value;
      this.studentService.UpdateStudent(this.studentId, student).subscribe(
        // Handle success or error response
      )
  }
}
