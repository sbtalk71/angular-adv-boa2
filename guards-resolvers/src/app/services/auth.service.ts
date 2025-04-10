import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  delay(ms:number){
    const end = Date.now() + ms;
    while (Date.now() < end) continue
  }
  constructor( private http:HttpClient) { }

 
  isLoggedIn(){
    return true;
  }

  // getAllProducts():Observable<string>{
  //   this.delay(2000);
  //   return of("Lenovo E16 Ryzen 7 48Gb 1 TB");
  // }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>("https://fakestoreapi.com/products")
  }
}
