import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Register } from '../model/register';
import { CommonModule } from '@angular/common';
import { HttpClient, } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  constructor(private auth:AuthService){}
  registerForm:FormGroup|any;
  // formsubmitted:boolean=false;
  // constructor(private formbuilder:FormBuilder, private api:RegisterService, private http:HttpClient){}
  ngOnInit(): void {
      this.registerForm=new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }
   passdata:any = [];
  onSubmit(){
    this.passdata.push(this.registerForm.value);
    console.log(this.passdata);
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('password').value;
    this.auth.RegisterUser(email, password);
     }

}
