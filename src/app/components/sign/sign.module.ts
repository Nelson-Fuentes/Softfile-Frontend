import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmComponent } from './confirm/confirm.component';
import { ResetPasswordRequestComponent } from './resetpasswordrequest/resetpasswordrequest.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';



@NgModule({
  declarations: [LoginComponent, SignComponent, RegisterComponent, ConfirmComponent, ResetPasswordRequestComponent, ResetpasswordComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ]
})
export class SignModule { }
