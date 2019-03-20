import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
export const appRoute:Routes=[
    {path:'login',component:LoginComponent ,pathMatch:'full'},
    {path:'home',component:HomeComponent ,pathMatch:'full'},
    {path:'', redirectTo:'/login', pathMatch:'full'}
]
