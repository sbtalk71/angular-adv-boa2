import { inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product[]> {
  constructor(private service:AuthService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    
    return this.service.getAllProducts();
  }
}
