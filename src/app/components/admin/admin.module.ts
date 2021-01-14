import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutes } from './admin-routing.module';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dynamic/dashboard/dashboard.component';
import { HeaderComponent } from './static/header/header.component';
import { ProfileComponent } from './dynamic/profile/profile.component';
import { ModuleTemplateComponent } from './static/module-template/module-template.component';
import { FormTemplateComponent } from './static/form-template/form-template.component';


@NgModule({
  declarations: [
    SidebarComponent,
    AdminComponent,
    DashboardComponent,
    HeaderComponent,
    ProfileComponent,
    ModuleTemplateComponent,
    FormTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
