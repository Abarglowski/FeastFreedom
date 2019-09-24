import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../FeastFreedom_Angular/FreedomFeast/src/app/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  register;

  constructor(private userService: UserService ) { }

  ngOnInit() {
    this.register = {
      email: '',
      full_name: '',
      password: ''
    };
  }

  registerUser() {
    this.userService.registerUser(this.register).subscribe(
      response => {
        alert('User ' + this.register.email + ' has been created!');
      },
      error => console.log('error', error)
    );
  }


}
