import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-app-signal',
  imports: [],
  templateUrl: './app-signal.component.html',
  styleUrl: './app-signal.component.css'
})
export class AppSignalComponent {

  constructor(){
    console.log("AppSignalComponent created...");
    effect(()=>console.log("Effects called ... ",this.a(),this.b()));
  }
  value=signal(10);

  num1:number=10;
  num2:number=20;

  sum=this.num1+this.num2;

  chnagNumberValue(){
    this.num1=30;
  }

  a=signal(10);
  b=signal(20);

  sum2=computed(()=>this.a()+this.b());

  changeSignalValueA(){
    this.a.update(data=>data+30)
  }

  changeSignalValueB(){
    this.b.update(data=>data+30)
  }

}
