import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './products/products.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {path:'',component:StoreComponent},
  {path:'products',component:ProductsComponent},
  {path:'overview',component:OverviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
