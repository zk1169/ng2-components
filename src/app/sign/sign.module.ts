import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignComponent } from './sign-component';
import { LoginComponent } from './login-component';
import { SignRoutes } from './sign.routes';

@NgModule({
    imports: [ CommonModule,SignRoutes],
    providers: [],
    declarations: [
        SignComponent, LoginComponent
    ]
})
export class SignModule {}
