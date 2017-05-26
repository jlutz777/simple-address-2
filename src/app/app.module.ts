import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';

// Initialize Firebase
export const firebaseConfig = {
    apiKey: 'AIzaSyAfw9iMevqeWqYknrGuQXvgQxOVjuFx7Ow',
    authDomain: 'simple-address.firebaseapp.com',
    databaseURL: 'https://simple-address.firebaseio.com',
    storageBucket: 'simple-address.appspot.com',
    messagingSenderId: '56009710745',
    projectId: 'simple-address'
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
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
