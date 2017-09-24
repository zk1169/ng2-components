import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { ComponentModule } from '../components/component.module';

import { SharedModule } from '../shared/shared.module';
import { SignComponent } from './sign-component';
import { LoginComponent } from './login-component';
import { SignRoutes } from './sign.routes';

export function createTranslateLoader(http: Http){
    return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}

@NgModule({
    imports: [
        ComponentModule,
        SignRoutes,
        HttpModule,
        JsonpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [Http]
        }),
        SharedModule,
    ],
    declarations: [
        SignComponent,
        LoginComponent,
    ]
})
export class SignModule {
    
 }
