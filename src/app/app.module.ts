import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCardModule, MdIconModule, MdInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { FindComponent } from './find/find.component';

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
        AppComponent,
        FindComponent
    ],
    imports: [
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,
        HttpModule,
        MdCardModule,
        MdIconModule,
        MdInputModule,
        AppRoutingModule,
        LoginModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
