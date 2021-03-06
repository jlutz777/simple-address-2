import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthGuard } from '../guards/auth-guard';
import { AuthService } from '../services/auth-service';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule
    ],
    providers: [
        AuthGuard,
        AuthService
    ],
    declarations: [
    ]
})
export class LoginModule { }
