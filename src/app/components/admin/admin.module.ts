import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './static/header/header.component';
import { ModuleTemplateComponent } from './static/module-template/module-template.component';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

import { ProfileModule } from './dynamic/profile/profile.module';
import { DashboardModule } from './dynamic/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    ModuleTemplateComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProfileModule,
    DashboardModule
  ],
  bootstrap : [  AdminComponent ]
})
export class AdminModule { }
