import { Component, resource, signal } from '@angular/core';

@Component({
  selector: 'app-signal-resource',
  imports: [],
  templateUrl: './signal-resource.component.html',
  styleUrl: './signal-resource.component.css'
})
export class SignalResourceComponent {

  productId=signal(10);

  productResource=resource({
    request: this.productId,
    loader: async ({request,abortSignal})=>{
      const response=await fetch(`https://fakestoreapi.com/products/${request}`,{signal:abortSignal});
      if(!response.ok){
        throw new Error("Failed to fetch the data..")
      }
      console.log(response);
      return response.json();
    }
  });
}
