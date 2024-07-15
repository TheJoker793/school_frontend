import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FraisService } from '../../services/frais.service';
import { Niveau } from '../../models/Models';
import { NiveauService } from '../../services/niveau.service';

@Component({
  selector: 'app-update-frais',
  templateUrl: './update-frais.component.html',
  styleUrl: './update-frais.component.css'
})
export class UpdateFraisComponent implements OnInit {
  fraisId!:number;
  fraisForm:FormGroup;
  niveaux:Niveau[]=[];
  constructor(private fb:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private fraisService:FraisService,
    private router:Router,
    private niveauService:NiveauService){
      this.fraisForm=fb.group({
        id:new FormControl(null),
        type:new FormControl(''),
        reglementId:new FormControl(null),
        niveauId:new FormControl(null),
        frais1:new FormControl(null),
        frais2:new FormControl(null),
        frais3:new FormControl(null)

      })

  }
  ngOnInit(): void {
    this.niveauService.getAllLevel().subscribe((data)=>{
      this.niveaux=data;
    })
    this.activatedRoute.params.subscribe((params)=>{
      this.fraisId=params['id'];
      this.fraisService.getFraisById(this.fraisId).subscribe(
        (data)=>{
          this.fraisForm=this.fb.group({
            id:new FormControl(data.id),
            type:new FormControl(data.type),
            reglementId:new FormControl(data.reglementId),
            niveauId:new FormControl(data.niveauId),
            frais1:new FormControl(data.frais1),
            frais2:new FormControl(data.frais2),
            frais3:new FormControl(data.frais3)
          })
        }
      )
    })
  }
  confirmUpdate(){
    this.fraisService.updateFrais(this.fraisId,this.fraisForm.value).subscribe(
      ()=>{
        this.router.navigate(['frais'])
      }
    )
  }

}
