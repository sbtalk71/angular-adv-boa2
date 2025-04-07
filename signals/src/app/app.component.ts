import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { AppRxjsComponent } from './app-rxjs/app-rxjs.component';
import { AppSignalComponent } from './app-signal/app-signal.component';

@Component({
  selector: 'app-root',
  imports: [AppSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'signals';

// ngDoCheck(): void {
//   console.log("Change happening...");
// }

}
