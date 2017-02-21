import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseAuthState,
         FirebaseListObservable,
         AuthMethods, AuthProviders } from 'angularfire2';

@Injectable()
export class AuthService {
    private authState$: Observable<FirebaseAuthState> = null;

    constructor(public af: AngularFire) {
        this.authState$ = af.auth;
    }

    login(userName: string, password: string) {
        this.af.auth.login({
            email: userName,
            password: password
        },
        {
          provider: AuthProviders.Password,
          method: AuthMethods.Password
        });

        return this.authState$;
    }
}
