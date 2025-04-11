import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LOGIN_URL="http://localhost:3000/login";
  delay(ms:number){
    const end = Date.now() + ms;
    while (Date.now() < end) continue
  }
  constructor( private http:HttpClient) { }

 
  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  // getAllProducts():Observable<string>{
  //   this.delay(2000);
  //   return of("Lenovo E16 Ryzen 7 48Gb 1 TB");
  // }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>("https://fakestoreapi.com/products")
  }

  login(user:User):Observable<any>{
    return this.http.post(this.LOGIN_URL,user);
  }

  getSecuredResource():Observable<any>{
    return this.http.get<any>("http://localhost:3000/protected",{headers:{Authorization:'Bearer '+this.getToken()}})
  }

}
