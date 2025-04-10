import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Component({
  selector: 'app-store',
  imports: [CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  data!:Product[];

 constructor(private route:ActivatedRoute){
this.data=this.route.snapshot.data['productsData']
//this.data.subscribe(p=>console.log(p[0]))
 }

}
