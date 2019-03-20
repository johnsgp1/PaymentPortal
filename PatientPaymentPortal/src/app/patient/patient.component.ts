import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToautopay(){
    alert('autopay');
    this.router.navigate([
      '/home', { outlets: { Home: ['PaymentAuto'] } }
  ])

 // this.router.navigate([
  //  '/home', { outlets: { Home: ['Patient'] } }
  //])
  }
  goToPaymentnow(){
    this.router.navigate([
      '/home',{ outlets: { Home: ['PaymentNow'] } }
    ])
    window.location.reload();
  }
}
