import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { UserCardComponent } from "../dumb/dumb.component";

@Component({
    selector: 'app-user-list',
    imports: [CommonModule,UserCardComponent],
    template: `
      <app-user-card 
        *ngFor="let user of users"
        [user]="user"
        (delete)="removeUser($event)">
      </app-user-card>
    `
  })
  export class UserListComponent {
    users = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'John', email: 'john@example.com' }
    ];
  
    removeUser(userId: number) {
      this.users = this.users.filter(user => user.id !== userId);
    }
  }