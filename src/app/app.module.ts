import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './components/admin/admin.module';
import { SignModule } from './components/sign/sign.module';
import { HttpClientModule } from '@angular/common/http';
import { BriefcaseComponent } from './components/briefcase/briefcase.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    BriefcaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    SignModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
