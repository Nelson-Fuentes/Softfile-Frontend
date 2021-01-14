import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutes } from './admin-routing.module';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dynamic/dashboard/dashboard.component';


@NgModule({
  declarations: [
    SidebarComponent,
    AdminComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
