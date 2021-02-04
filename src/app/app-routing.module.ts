import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminRoutes } from './components/admin/admin-routing.module'
import { SignRoutes } from './components/sign/sign-routing.module';
import { SignComponent } from './components/sign/sign.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "admin", component: AdminComponent, pathMatch: 'prefix', children: AdminRoutes, canActivate: [ AuthGuard ] },
  { path: "sign", component: SignComponent ,pathMatch: 'prefix', children: SignRoutes }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
