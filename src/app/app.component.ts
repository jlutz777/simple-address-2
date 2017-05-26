import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AuthService } from './services/auth-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';
    items: FirebaseListObservable<any[]>;

    constructor(private db: AngularFireDatabase, private auth: AuthService) {
    }

    ngOnInit() {
        this.auth.login('EMAIL', 'PASSWORD').subscribe(latest => {
            this.items = this.db.list('users/' + latest.uid + '/addresses');
        });
    }
}
