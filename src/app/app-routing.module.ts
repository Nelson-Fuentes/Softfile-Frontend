import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: "admin", component: AdminComponent,
    children: [
      {
        path: "",
        loadChildren: './components/admin/admin.module#AdminModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
