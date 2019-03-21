import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { PaymentNowComponent } from './payment-now/payment-now.component';
import { PaymentAutoComponent } from './payment-auto/payment-auto.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { PaymentResponseComponent } from './payment-response/payment-response.component';
export const appRoute:Routes=[
    {path:'login',component:LoginComponent ,pathMatch:'full'},
    //{path:'home',component:HomeComponent ,pathMatch:'full'},
    {path:'', redirectTo:'/login', pathMatch:'full'},
    {path:'home',component:HomeComponent,
    children:[
        {
            outlet:'Home',
            path:'Patient',
            component:PatientComponent
        },
        {
            outlet:'Home',
            path:'PaymentNow',
            component:PaymentNowComponent
        },
        {
            outlet:'Home',
            path:'PaymentAuto',
            component:PaymentAutoComponent
        },
        {
            outlet:'Home',
            path:'Customer',
            component:CustomerDetailsComponent
        },
        {
            outlet:'Home',
            path:'Response',
            component:PaymentResponseComponent
        }


    ]
}
]
