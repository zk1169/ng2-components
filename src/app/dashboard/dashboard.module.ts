import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard-component';
import { HomeComponent } from './home-component';
import { DashboardRoutes } from './dashboard.routes';

@NgModule({
    imports: [ CommonModule,DashboardRoutes],
    providers: [],
    declarations: [
        DashboardComponent, HomeComponent
    ]
})
export class DashboardModule {}
