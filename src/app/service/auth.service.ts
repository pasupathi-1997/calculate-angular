import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  RegisterUser(email:string, password:string){
    const auth =getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((res:any)=>{
      console.log(res);
      alert("Registration successfully");
      this.router.navigate(['/login']);
    })
    .catch((error:any)=>{
      console.log(error);
      this.router.navigate(['/register']);
    })
  }
  Login(email:string, password:string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((res:any)=>{
      console.log(res);
      this.router.navigate(['/listitem']);
    })
    .catch((error:any)=>{
      console.log(error);
      this.router.navigate(['/login']);
    })
  }
}
