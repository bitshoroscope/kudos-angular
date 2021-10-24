import { IUser } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser:IUser

  constructor(private router: Router) { }

  login(username: string, password: string){
    this.currentUser = {
      id:1,
      username:'andy',
      name:'andy',
      lastname:'bravo'
    }
    this.router.navigate(['/give-kudos']);
  }

  isAuthenticated(){
    return !!this.currentUser;
  }
}
