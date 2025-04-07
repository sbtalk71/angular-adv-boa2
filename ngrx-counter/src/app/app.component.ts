import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decerement, decerementDouble, increment, incrementDouble, reset, resetDouble } from './store/counter.actions';
import { CommonModule } from '@angular/common';
import { DoubleCounter } from './store/counter.reducers';
import { doubleCounterSelector } from './store/doublecounter.selectors';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-counter';

  data$!: Observable<number>;
  doubleData$!:Observable<number>;

  constructor(private store: Store<{ counter: number }>,private doubleDataStore:Store<{doubleData:DoubleCounter}>) {

    this.data$ = this.store.select('counter');
    this.doubleData$=this.doubleDataStore.select(doubleCounterSelector)
  }

  doIncrement() {
    
    this.store.dispatch(increment());
  }

  doDecrement() {
    this.store.dispatch(decerement());
  }

  doReset() {
    this.store.dispatch(reset());
  }

  doIncrementDouble(){
    this.doubleDataStore.dispatch(incrementDouble())
  }

  doDecrementDouble(){
    this.doubleDataStore.dispatch(decerementDouble())
  }

  doResetDouble(){
    this.doubleDataStore.dispatch(resetDouble())
  }
}
