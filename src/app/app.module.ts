import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';

// Initialize Firebase
export const firebaseConfig = {
    apiKey: 'AIzaSyAfw9iMevqeWqYknrGuQXvgQxOVjuFx7Ow',
    authDomain: 'simple-address.firebaseapp.com',
    databaseURL: 'https://simple-address.firebaseio.com',
    storageBucket: 'simple-address.appspot.com',
    messagingSenderId: '56009710745'
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        LoginModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
