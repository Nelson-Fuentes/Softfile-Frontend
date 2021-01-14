import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { DashboardComponent } from './dynamic/dashboard/dashboard.component';
import { ProfileComponent } from './dynamic/profile/profile.component';
//    canActivate: [AuthGuard]

export const AdminRoutes: Routes =[
    { path: 'dashboard', component: DashboardComponent},
    { path: 'profile', component: ProfileComponent }
];
