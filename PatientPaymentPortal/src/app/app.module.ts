import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaymentNowComponent } from './payment-now/payment-now.component';
import { PaymentAutoComponent } from './payment-auto/payment-auto.component';
import {RouterModule} from '@angular/router';
import {appRoute} from './routes';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentNowComponent,
    PaymentAutoComponent,
    LoginComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
