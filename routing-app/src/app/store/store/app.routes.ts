import { Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { ProductsComponent } from '../products/products.component';
import { OverviewComponent } from '../overview/overview.component';


export const CHILD_ROUTES: Routes = [
    
 {path:'',component:StoreComponent},
  {path:'products',component:ProductsComponent},
  {path:'overview',component:OverviewComponent}
];
