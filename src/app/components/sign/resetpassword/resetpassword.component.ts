import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ModuleDataService } from 'src/app/services/module_data/module-data.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  private title:string = 'Cambio de contraseña';
  private token:string;
  public form_password: FormGroup;
  public password: string = '';

  constructor(
    private moduleDataService: ModuleDataService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: ToastrService,
    private router: Router
  ) {
    this.moduleDataService.title = this.title;
    this.token = this.activatedRoute.snapshot.params.token;
    this.form_password = this.formBuilder.group({
      password: new FormControl('', [ Validators.required ])
    });
   }

  ngOnInit(): void {
  }

  public get_field(tag: string){
    return this.form_password.get(tag)
  }

  public reset_password(){
    this.authService.reset_password(this.token, this.password).subscribe(
      message => {
        this.toastService.success('Intente iniciar sesión', 'Cambio de contraseña exitoso');
      }, error => {
        this.toastService.error(error.error.messge, 'Ocurrio un error')
      }, () =>{
        this.router.navigate(['sign/in']);
      }
    );
  }

}
