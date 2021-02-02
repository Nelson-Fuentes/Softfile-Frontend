import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ModuleDataService } from 'src/app/services/module_data/module-data.service';
import { Location }  from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resetpasswordrequest',
  templateUrl: './resetpasswordrequest.component.html',
  styleUrls: ['./resetpasswordrequest.component.css']
})
export class ResetPasswordRequestComponent implements OnInit {

  private title: string = "Solicitar cambio de contraseña"
  public form_request: FormGroup;
  public email: string = '';

  constructor(
    private moduleDataService: ModuleDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private location: Location,
    private toastrService: ToastrService
  ) {
    this.moduleDataService.title  = this.title;
    this.form_request = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
  }

  public get_field(tag: string){
    return this.form_request.get(tag)
  }

  public cancel(){
    this.router.navigate(['sign/in'])
  }

  public request_reset_password(){
    let redirecTo: string =  window.location.href.replace(this.location.path(), '') + "/sign/password/"
    this.authService.request_reset_password(this.email, redirecTo).subscribe(
      message =>{
        this.toastrService.success('Revise su corre electronico', 'Solcicitud aceptada');
        this.router.navigate(['sign/in'])
      }, error => {
        this.toastrService.error(error.error.message, 'Ocurrio un error');
      }
    );
  }

}
