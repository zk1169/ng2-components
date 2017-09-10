import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoute } from './app.routes';

import { SignModule } from './sign/sign.module';
// import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoute,
    SignModule,
    // DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
