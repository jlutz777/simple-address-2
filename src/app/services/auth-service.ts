import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
    private authState$: Observable<User> = null;

    constructor(public afAuth: AngularFireAuth) {
        this.authState$ = afAuth.authState;
    }

    login(userName: string, password: string) {
        this.afAuth.auth.signInWithEmailAndPassword(userName, password);

        return this.authState$;
    }
}
