import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-payment-auto',
  templateUrl: './payment-auto.component.html',
  styleUrls: ['./payment-auto.component.css']
})
export class PaymentAutoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToCustomerDetails(ev:any){
   this.router.navigate([
     '/home', { outlets: { Home:['Customer'] } }
   ])
  }
}
