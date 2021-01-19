import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminRoutes } from './components/admin/admin-routing.module'
const routes: Routes = [
  { path: "admin", component: AdminComponent, pathMatch: 'prefix',
    children: AdminRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
