import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-app-rxjs',
  imports: [],
  templateUrl: './app-rxjs.component.html',
  styleUrl: './app-rxjs.component.css'
})
export class AppRxjsComponent {

  value=0;
  source$ =interval(1000);

  subscription=this.source$.subscribe(v=>{this.value=v;console.log(v)});
  
  unsubscribe(){
    this.subscription.unsubscribe();
  }

}
