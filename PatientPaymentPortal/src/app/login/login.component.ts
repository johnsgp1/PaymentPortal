import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import * as $ from 'jquery';
import {LoginService} from '../shared/loginService/login.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }
  GetLoginService(event:any){
   // $('body').html('');
    var InputParam={
      clinic:$('#mrn').val(),
      mrn:$('#mrn').val(),
      dob:$('#DOB').val(),
      email:$('#email').val()
    }
    this.loginService.loginService(InputParam)
    .subscribe((data:any)=>{
      if(data!==null){
       //$('body').html('');
        //this.router.navigate(['/home'])
        this.router.navigate([
          '/home', { outlets: { Home: ['Patient'] } }
        ])
       }
    });
  }
}
