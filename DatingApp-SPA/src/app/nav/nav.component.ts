import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_servives/auth.service';
import { error } from 'protractor';
import { AlertifyService } from '../_servives/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  username: any;
  photoUrl: string;

  constructor(public authService: AuthService, private aleritify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
    this.aleritify.success('Logged in successfully');
    }, error => {
      this.aleritify.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.aleritify.message('logout');
    this.router.navigate(['/home']);
  }
}
