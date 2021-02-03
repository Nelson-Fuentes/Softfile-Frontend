import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ModuleDataService } from 'src/app/services/module_data/module-data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private title: string = "Inicio de Sesión"
  public form_login: FormGroup;
  public username: string = '';
  public password: string = '';

  constructor(
    private moduleDataService : ModuleDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {
    this.moduleDataService.title = this.title;
    this.form_login = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
   }

  ngOnInit(): void {
  }

  public go_to(url:string): void{
    this.router.navigate([url]);
  }

  public get_field(tag: string){
    return this.form_login.get(tag)
  }

  public auth(){
    this.authService.authentication(this.username, this.password).subscribe(
      sucess => {
        localStorage.setItem(environment.token_authentication_key , sucess.token);
        this.toastrService.success('Inicio de sesión satisfactorio', 'Bienvenido');
        this.router.navigate(['admin/dashboard']);
      }, error => {
        this.toastrService.error(error.error.message, 'Ha ocurrido un error')
      }
    );
  }
}
