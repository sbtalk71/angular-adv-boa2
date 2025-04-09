import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  canExit() {
    if (window.confirm("Do you want to leave the page")) {
      return true;
    } else {
      return false;
    }
  }
}
