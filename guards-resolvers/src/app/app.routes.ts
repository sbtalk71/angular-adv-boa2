import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard} from './guards/auth.guard';
import { UnsavedGuard } from './guards/unsaved.guard';
import { ProductResolver } from './resolvers/product.resolver';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const routes: Routes = [

    {path:'login', component:LoginComponent},
    {path:'profile',component:ProfileComponent, canDeactivate:[UnsavedGuard]},
    {path:'unathourized',component:UnauthorizedComponent},
    {path: 'store',component:StoreComponent, resolve:{productsData:ProductResolver},canActivate:[authGuard]},
    {path:'admin',component:AdminComponent, canActivate:[authGuard]},
    {path:'admin2',redirectTo:()=>{
        return inject(AuthService).isLoggedIn()?'/store':'/login'
    },pathMatch:'full'}
];
