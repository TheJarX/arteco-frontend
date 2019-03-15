import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';


const appRoutes: Routes = [
    {path: '', component: LoginComponent },
    {path: 'dashboard', component: DashboardComponent },
    {path: '**', component: AppComponent }
];

export const appRoutingProviders: any[] = [];
export const  routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

