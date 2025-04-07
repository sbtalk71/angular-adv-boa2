import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { AppRxjsComponent } from './app-rxjs/app-rxjs.component';
import { AppSignalComponent } from './app-signal/app-signal.component';
import { CounterComponent } from './counter/counter.component';
import { NewDirectivesComponent } from './new-directives/new-directives.component';

@Component({
  selector: 'app-root',
  imports: [NewDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'signals';

// ngDoCheck(): void {
//   console.log("Change happening...");
// }

}
