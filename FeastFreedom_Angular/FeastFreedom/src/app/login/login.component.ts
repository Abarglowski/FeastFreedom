import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { PageCheckService } from '../page-check.service';

interface TokenObj {
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService, CookieService]
})
export class LoginComponent implements OnInit {
  input;

  constructor(
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router,
    private _pageCheckService: PageCheckService ) { }

  logToken;

  ngOnInit() {
    this.input = {
      email: '', // username
      password: ''
    };
    const usrToken = this.cookieService.get('usr-token');
    if (usrToken) {
      this.router.navigate(['/kitchen']);
    }
  }

  loginUser() {
    this.userService.loginUser(this.input).subscribe(
      response => {
        console.log(response);
        this.cookieService.set('usr-token', response.token);
        // alert('User ' + this.input.username + ' has been logged in!');
        this.router.navigate(['/kitchen']);
      },
      error => console.log('error', error)
    );
  }

  selectPr() {
    this._pageCheckService.displayProviderRegister();
    this.router.navigate(['/register']);
  }

  selectUr() {
    this._pageCheckService.displayUserRegister();
    this.router.navigate(['/register']);
  }


}
