import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-rx-resource',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rx-resource.component.html',
  styleUrl: './rx-resource.component.css'
})
export class RxResourceComponent {

  constructor(private http:HttpClient){}

  productResource=rxResource({
  
  loader:()=>{return this.http.get<any>(`https://fakestoreapi.co/products/10`)}
  }
  );
}
