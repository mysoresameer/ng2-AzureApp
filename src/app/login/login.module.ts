import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing'; //TODO: Create app.routing

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
