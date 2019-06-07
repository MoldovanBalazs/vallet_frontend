import {Component, ElementRef, Injectable, NgModule, OnInit, ViewChild} from '@angular/core';
import {User} from '../model/User';

import {Router, RouterModule} from '@angular/router';

import {UserService} from '../service/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  public user: User = new User();
  private router: Router;

  constructor(router: Router, private userService: UserService) {
    this.router = router;
  }

  ngOnInit() { }

  onLogin($event) {
    console.log('Login Log' + JSON.stringify(this.user));
    this.userService.validateUser(this.user).subscribe((data: User) => {
      console.log('Validation service ' + data);
      const returned = data as User;
      if (returned != null) {
        this.router.navigateByUrl('/mainmenu');
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }
}
