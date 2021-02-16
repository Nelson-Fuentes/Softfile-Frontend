import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './static/header/header.component';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

import { ProfileModule } from './dynamic/profile/profile.module';
import { DashboardModule } from './dynamic/dashboard/dashboard.module';
import { ContactComponent } from './dynamic/contact/contact.component';
import { EmailComponent } from './dynamic/contact/email/email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    ContactComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProfileModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  bootstrap : [  AdminComponent ]
})
export class AdminModule { }
