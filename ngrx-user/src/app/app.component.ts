import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Store } from '@ngrx/store';
import { UserState } from './store/user.reducers';
import { userArraySelector } from './store/user.selectors';
import { addUser, removeUser } from './store/user.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-user';

  users$!:Observable<User[]>;

  constructor(private store:Store<UserState>){
    this.users$=this.store.select(userArraySelector);
  }


  addUserHandler(username:string){
    const u=new User();
    u.name=username;

    this.store.dispatch(addUser(u))
  }

  remove(uid:number){
    this.store.dispatch(removeUser({id:uid}))
  }
}
