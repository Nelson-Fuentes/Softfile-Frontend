import { Routes } from '@angular/router';
import { ContactComponent } from './dynamic/contact/contact.component';
import { DashboardComponent } from './dynamic/dashboard/dashboard.component';
import { ProfileComponent } from './dynamic/profile/profile.component';
import { StudyComponent } from './dynamic/study/study.component';

export const AdminRoutes: Routes =[
    { path: 'dashboard', component: DashboardComponent},
    { path: 'profile', component: ProfileComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'study', component: StudyComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
