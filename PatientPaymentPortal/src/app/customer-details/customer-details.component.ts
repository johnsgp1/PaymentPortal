import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToResponse(ev:any){
  this.router.navigate([
    '/home',{outlets:{Home:['Response']}}
  ])
  }
}
