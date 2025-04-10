import { Component } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-root',
  imports: [UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms-app';
}
