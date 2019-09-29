import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../FeastFreedom_Angular/FeastFreedom/src/app/user.service';
import { Router } from '@angular/router';
import { PageCheckService } from '../page-check.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  register;
  provider;
  providerRegister = this._pageCheckService.getRegisterPage();

  constructor(
    private userService: UserService,
    private router: Router,
    private _pageCheckService: PageCheckService) { }


  ngOnInit() {
    this.register = {
      email: '',
      password: '',
      name: '',
      is_sp: false
    };
    this.provider = {
      email: '',
      name: '',
      password: '',
      is_sp: true
    };
  }

  registerUser() {
    this.userService.registerUser(this.register).subscribe(
      response => {
        alert('User ' + this.register.email + ' has been created!');
        this.router.navigate(['/login']);
      },
      error => console.log('error', error)
    );
  }

  registerProvider() {
    this.userService.registerUser(this.provider).subscribe(
      response => {
        alert('Provider ' + this.provider.full_name + 'has been created!');
      },
      error => console.log('error', error)
    );
  }




}
