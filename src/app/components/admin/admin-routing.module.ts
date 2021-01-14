import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { DashboardComponent } from './dynamic/dashboard/dashboard.component';
//    canActivate: [AuthGuard]

export const AdminRoutes: Routes =[
    { path: '', component: DashboardComponent},
];
