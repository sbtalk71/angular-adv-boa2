import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'orders',loadChildren:()=>loadRemoteModule('orders','./routes').then(m=>m.ORDERS_ROUTES)},
    {path:'products',loadChildren:()=>loadRemoteModule('products','./routes').then(m=>m.PRODUCTS_ROUTES)},
];

