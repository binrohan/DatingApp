import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Resolve, Route, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AlertifyService } from '../_servives/alertify.service';
import { UserService } from '../_servives/user.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_servives/auth.service';


@Injectable()
export class MemberEditResolver implements Resolve<User> {
    constructor(private userService: UserService, private router: Router,
                private alertify: AlertifyService,
                private authService: AuthService) {}
// Check here: later
    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving your data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}
