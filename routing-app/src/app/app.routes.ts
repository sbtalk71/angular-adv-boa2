import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'adduser',loadComponent:()=>import('./pages/add-user/add-user.component').then(m=>m.AddUserComponent)},
    {path:'remove/:id',loadComponent:()=>import('./pages/remove-user/remove-user.component').then(m=>m.RemoveUserComponent)},
    {path:'edituser/:id',loadComponent:()=>import('./pages/edit-user/edit-user.component').then(m=>m.EditUserComponent)},
    {path:'users',loadComponent:()=>import('./pages/list-users/list-users.component').then(m=>m.ListUsersComponent),data:{preload:true}},
    {path:'users/:id',loadComponent:()=>import('./pages/user-details/user-details.component').then(m=>m.UserDetailsComponent)},
    {path:'admin',loadComponent:()=>import('./pages/admin/admin.component').then(m=>m.AdminComponent)},

    {path:'oldstore',loadChildren:()=>import('./store/store.module').then(m=>m.StoreModule)},

    {path:'store',loadChildren:()=>import('./store/store/app.routes').then(m=>m.CHILD_ROUTES)}

];
