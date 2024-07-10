import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NiveauService } from '../../services/niveau.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-niveaux',
  templateUrl: './update-niveaux.component.html',
  styleUrl: './update-niveaux.component.css'
})
export class UpdateNiveauxComponent implements OnInit {
  niveauId!: number;
  niveauForm!: FormGroup
  constructor(private niveauService: NiveauService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.niveauForm = this.fb.group({
      id: new FormControl(null),
      libelle: new FormControl(''),
      option: new FormControl(''),
      capacite: new FormControl(0)
    })
  }
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
    (params)=>{
      this.niveauId=params['id'];
      this.niveauService.getLeveleById(this.niveauId).subscribe(
      (data)=>{
      this.niveauForm=this.fb.group({
      id:data.id,
      libelle:data.libelle,
      option:data.option,
      capacite:data.capacite
      })
      }
      
      )
      }
    );
  }
  confirmUpdate(){
  this.niveauService.updateLevel(this.niveauId,this.niveauForm.value).subscribe(
    ()=>{
    this.router.navigate(['classes/niveaux']);
    }
  )
  }
  




  
  }