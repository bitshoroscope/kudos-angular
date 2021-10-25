import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string
  password:string

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  async login(formValues){
    this.authService.login(formValues.username, formValues.password);
  }

}
