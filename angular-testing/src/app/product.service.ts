
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Product } from "./product.model";

@Injectable({providedIn:'root'})
export class ProductService{
    constructor(){

    }

    public getProductById(id:number): Observable<Product>{
        console.log("calling external service...");
        return of({id:10,title:'SSD',price:100,description:"drive",image:'url',category:""})
       // return this.http.get<Product>('https://fakestoreapi.com/products/'+id);
    }
}