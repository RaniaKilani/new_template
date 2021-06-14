import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(
    private authService:AuthenticationService,
    private router:Router,
    private fb:FormBuilder,
    private http:HttpClient,
  ) {
    this.loginForm=this.fb.group({
    mail:['',[Validators.required]],
    pwd:['',[Validators.required]],})
   }

  ngOnInit() {}

}
