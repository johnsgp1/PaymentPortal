import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaymentNowComponent } from './payment-now/payment-now.component';
import { PaymentAutoComponent } from './payment-auto/payment-auto.component';
import {RouterModule} from '@angular/router';
import {appRoute} from './routes';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './shared/loginService/login.service';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { PaymentResponseComponent } from './payment-response/payment-response.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentNowComponent,
    PaymentAutoComponent,
    LoginComponent,
    PatientComponent,
    CustomerDetailsComponent,
    PaymentResponseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
