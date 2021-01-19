import { Routes } from '@angular/router';
import { DashboardComponent } from './dynamic/dashboard/dashboard.component';
import { ProfileComponent } from './dynamic/profile/profile.component';

export const AdminRoutes: Routes =[
    { path: 'dashboard', component: DashboardComponent},
    { path: 'profile', component: ProfileComponent },
];
