import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ModuleDataService } from 'src/app/services/module_data/module-data.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';
import { Location }  from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private title: string = "Registro de Usuario"
  public form_register: FormGroup;
  public user: User = new User('', '', '', '', '');

  constructor(
    private moduleDataService: ModuleDataService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private userService: UserService,
    private location: Location,
    private router: Router
  ) {
    this.moduleDataService.title = this.title;
    this.form_register = this.formBuilder.group({
      username: new FormControl('' , [Validators.required]),
      firstname: new FormControl('' , [Validators.required]),
      lastname: new FormControl('' , [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password1: new FormControl('' , [Validators.required]),
      password2: new FormControl('' , [Validators.required, this.repeat_password()]),
    });
  }

  ngOnInit(): void {
  }

  public user_register(){
    let redirecTo =  window.location.href.replace(this.location.path(), '') + "/sign/in";
      this.userService.add_user({
      username: this.user.username,
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      password: this.user.password,
      email: this.user.email,
      redirectTo : redirecTo
    }).subscribe( user => {
      this.toastrService.success('Revisa tu correo electronico para validarlo.', user.firstname + ' has sido registrado');
      this.router.navigate(['sign/in'])
    }, error =>{
      this.toastrService.error(error.error.message, 'No se pudo registrar el usuario..')
    });
  }

  public get_field(tag: string){
    return this.form_register.get(tag)
  }

  public repeat_password(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let value = control.value;
      let response = false
      if (this.form_register){
        let password = this.form_register.get('password1')?.value;
        response = value == password;
      }
      return !response ? {password: {value: control.value}} : null;
    };
  }

  public cancel(){
    console.log('cancelar');
  }
}
