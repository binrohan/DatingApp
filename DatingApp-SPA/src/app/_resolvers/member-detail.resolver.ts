import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Resolve, Route, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AlertifyService } from '../_servives/alertify.service';
import { UserService } from '../_servives/user.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class MemberDetailResolver implements Resolve<User> {
    constructor(private userService: UserService, private router: Router,
                private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(route.params.id).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}
