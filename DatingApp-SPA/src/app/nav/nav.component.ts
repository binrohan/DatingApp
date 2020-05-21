import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_servives/auth.service';
import { error } from 'protractor';
import { AlertifyService } from '../_servives/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  username: any;

  constructor(public authService: AuthService, private aleritify: AlertifyService) { }

  ngOnInit() {}

  login(){
    this.authService.login(this.model).subscribe(next => {
    this.aleritify.success('Logged in successfully');
    // this.username = this.model.username;
    }, error => {
      this.aleritify.error(error);
    });
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.aleritify.message('logout');
  }
}
