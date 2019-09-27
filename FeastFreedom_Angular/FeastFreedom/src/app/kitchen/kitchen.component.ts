import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  constructor(private userService: UserService, private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    const usrToken = this.cookieService.get('usr-token');
    if (!usrToken) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.cookieService.delete('usr-token');
    this.router.navigate(['login']);
  }

}
