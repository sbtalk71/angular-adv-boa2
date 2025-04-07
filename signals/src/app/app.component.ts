import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { AppRxjsComponent } from './app-rxjs/app-rxjs.component';

@Component({
  selector: 'app-root',
  imports: [AppRxjsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements DoCheck{
  title = 'signals';

ngDoCheck(): void {
  console.log("Change happening...");
}

}
