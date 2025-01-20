import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class ListitemService {

  constructor(private router:Router) { }

  signout(){
    const auth = getAuth();
    signOut(auth).then((res:any)=>{
      console.log(res);
      this.router.navigate(['/login']);
    })
  }
}
