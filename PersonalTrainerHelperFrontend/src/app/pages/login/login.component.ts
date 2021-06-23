import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public password: string = "";

  constructor(private _router: Router,
              private _authService: AuthService) { }

  ngOnInit(): void {
  }

  public signIn (){
    this._authService.singIn(this.email, this.password).subscribe(res => {
      if(res){
        this._authService.setLoggedInUser(res.user);
        this._router.navigate(['home']);
      }
    });
  }
}