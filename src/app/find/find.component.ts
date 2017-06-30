import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
    private filterVal: BehaviorSubject<string>;
    items: Observable<any[]>;

    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.filterVal = new BehaviorSubject('');
    }

    ngOnInit() {
        this.items = Observable.combineLatest(this.db.list('users/' + this.afAuth.auth.currentUser.uid + '/addresses') as Observable<any[]>,
            this.filterVal.asObservable()).map(([addresses, val]) => {
                return addresses.filter((address) => {
                    return val === '' || (address.first_name + ' ' + address.last_name).toLowerCase().indexOf(val.toLowerCase()) !== -1;
                });
            });
    }

    filter(val: string) {
        this.filterVal.next(val);
    }
}
