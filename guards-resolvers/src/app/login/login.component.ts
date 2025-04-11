import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginModel:User={username:"",password:""}
constructor(private auth:AuthService,private router:Router){
  
}
  doLogin(){
    this.auth.login(this.loginModel).subscribe({
      next:jwt=>{
        localStorage.setItem('token',jwt.token);
        this.router.navigate(["/"]);
      },
      error: ()=>this.router.navigate(["unathorized"])
    }

    );
  }
}
