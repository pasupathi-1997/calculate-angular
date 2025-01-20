import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { config } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginform:FormGroup|any;
  constructor(private auth:AuthService){}
  ngOnInit(): void {
  this.loginform = new FormGroup({
    email : new FormControl(''),
    password:new FormControl(''),
  })
}
passdata1:any=[];
onSubmit(){
  this.passdata1.push(this.loginform);
  console.log(this.passdata1);
  const email = this.loginform.get('email').value;
  const password = this.loginform.get('password').value;
  this.auth.Login( email, password);
}
}
