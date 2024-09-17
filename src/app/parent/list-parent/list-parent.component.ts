import { Component, OnInit } from '@angular/core';
import { Parent } from '../../models/Models';
import { ParentService } from '../../services/parent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-parent',
  templateUrl: './list-parent.component.html',
  styleUrl: './list-parent.component.css'
})
export class ListParentComponent implements OnInit{
  parents:Parent[]=[];
  constructor(private parentService:ParentService,private router:Router){

  }
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.parentService.getAllParent().subscribe(
      (data)=>{
        this.parents=data
      }
    )
  }
  goUpdate(parent:Parent){
    this.router.navigate(['parents/update',parent.id])
  }
  DeleteParent(parent:any){
    this.parentService.deleteParent(parent.id).subscribe(
      ()=>{
        this.refresh()
      }
    )
  }

}
