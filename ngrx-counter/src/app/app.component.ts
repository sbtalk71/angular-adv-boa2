import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decerement, increment, reset } from './store/counter.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-counter';

  data$!: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {

    this.data$ = this.store.select('counter');
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

}
