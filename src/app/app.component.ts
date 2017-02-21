import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AuthService } from './services/auth-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';
    items: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire, private auth: AuthService) {
    }

    ngOnInit() {
        this.auth.login('EMAIL', 'PASSWORD').subscribe(latest => {
            this.items = this.af.database.list('users/' + latest.uid + '/addresses');
        });
    }
}
