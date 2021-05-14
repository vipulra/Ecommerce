import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {email: "", password: ""}
  message = "";

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
    if(this._auth.loginUser(this.loginUserData))
      {
        localStorage.setItem('token',
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiJ9.rFcqI_6iHyIx450Esqa3yXqyZLhPhKt9eKeHcnjYujQ")
        this._router.navigate(['/products'])
      }
      else {
        this.message = "Username or password does not match";
      }
    }


}
