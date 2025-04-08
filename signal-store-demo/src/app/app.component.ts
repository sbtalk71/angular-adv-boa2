import { Component, inject } from '@angular/core';
import { counterStore } from './store/counter.store';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signal-store-demo';

  counterState=inject(counterStore);

  doIncrement(){
    this.counterState.increment();
  }
  doReset(){
    this.counterState.reset();
  }

  doDecrement(){
    this.counterState.decrement();
  }
}
