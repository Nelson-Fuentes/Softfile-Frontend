import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ModuleDataService } from 'src/app/services/module_data/module-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private title: string = "Registro de Usuario"
  public form_register: FormGroup;

  constructor(
    private moduleDataService: ModuleDataService,
    private formBuilder: FormBuilder
  ) {
    this.moduleDataService.title = this.title;
    this.form_register = this.formBuilder.group({
      username: new FormControl('' , [Validators.required]),
      firstname: new FormControl('' , [Validators.required]),
      lastname: new FormControl('' , [Validators.required]),
      password1: new FormControl('' , [Validators.required]),
      password2: new FormControl('' , [Validators.required, this.repeat_password()]),
    });
  }

  ngOnInit(): void {
  }

  public user_register(){

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
}
