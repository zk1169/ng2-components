import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'sign/login', pathMatch: 'full'},
  { path: 'sign', loadChildren: '../sign/sign.module#SignModule' },
  { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
  { path: '**', redirectTo: 'sign/login', pathMatch: 'full'}
];

//export const AppRoute: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true,preloadingStrategy: PreloadAllModules });
export const AppRoute: ModuleWithProviders = RouterModule.forRoot(
    routes,
    { enableTracing: false } // <-- debugging purposes only
);