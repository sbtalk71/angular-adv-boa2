import { Component } from '@angular/core';
import { SignalResourceComponent } from './signal-resource/signal-resource.component';
import { RxResourceComponent } from './rx-resource/rx-resource.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [SignalResourceComponent,RxResourceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resource-demo';
}
