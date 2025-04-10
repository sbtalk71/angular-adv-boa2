import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DeferredComponent } from '../deferred/deferred.component';

@Component({
  selector: 'app-new-directives',
  imports: [CommonModule,DeferredComponent],
  templateUrl: './new-directives.component.html',
  styleUrl: './new-directives.component.css'
})
export class NewDirectivesComponent {

  isAdmin:boolean=false;

  users=[
    {id:1,name:"Shantanu"},
    {id:2,name:"Ranga"},
    {id:3,name:"Pavan"},
    {id:4,name:"Karan"},
    {id:5,name:"Shiva"}
  ]

  status:string="loadings";

  items=10;
  price=20.5;

  addUsers(){
  this.users=  [{id:1,name:"Shantanu"},
    {id:2,name:"Ranga"},
    {id:3,name:"Pavan"},
    {id:4,name:"Johar"},
    {id:5,name:"Jeevan"},
    {id:6,name:"Kiran"},
    {id:7,name:"Atish"},
    {id:8,name:"Shivam"}
    ]
  }

  trackById(id:number){
    return id;
  }
}
