import { Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const SignRoutes: Routes =[
  { path: 'in', component: LoginComponent },
  { path: 'up', component: RegisterComponent },
  { path: 'confirm/:token', component: ConfirmComponent }
];
