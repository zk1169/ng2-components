import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard-component';
import { HomeComponent } from './home-component';
// import { AdBannerComponent } from './banner-component';

const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [
    	{ path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: 'home', component: HomeComponent },
        // { path: 'ad', component: AdBannerComponent }
    ]
}];

export const DashboardRoutes: ModuleWithProviders = RouterModule.forChild(routes);
