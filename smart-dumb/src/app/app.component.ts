import { Component } from '@angular/core';
import { UserListComponent } from './smart/smart.component';

@Component({
  selector: 'app-root',
  imports: [UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'smart-dumb';
}
