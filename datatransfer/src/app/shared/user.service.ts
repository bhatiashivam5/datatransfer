import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    
  constructor( private router:Router) { }
   //store username in localstorage


   setuser(username:string)
   {
     localStorage.setItem('user',username);
   }

   getuser()
   {
     return localStorage.getItem('user');
   }

   removeUser()
   {
     localStorage.removeItem('user');
   }

   isLoggedout()
   {
    localStorage.removeItem('user'),
    this.router.navigateByUrl('/');
   }

   loggedin(){
    return localStorage.getItem('user');
   }



    //check user stored in localstorage or not

  isLoggedIn()
  {
    if(this.getuser()==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }


}
