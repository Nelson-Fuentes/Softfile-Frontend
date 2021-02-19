import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PhoneCode, PhoneNumber } from 'src/app/models/phone';
import { PhoneService } from 'src/app/services/phone/phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  public phone_codes: PhoneCode[] = [];
  public phone_numbers: PhoneNumber[] = [];
  public current_page:number = 1;
  public add_phone: PhoneNumber= new PhoneNumber('');
  public add_phone_form: FormGroup;

  constructor(
    private phoneService: PhoneService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {
    this.add_phone_form = this.make_phone_form_group();
    this.phoneService.get_phone_codes().subscribe(
      codes => {
        this.phone_codes = codes;
      }, err => {
        this.toastrService.error(err.error, 'Ocurrio un error')
      }
    );
    this.phoneService.get_phone_number_auth().subscribe(
      phones => {
        this.phone_numbers = phones;
      }, err => {
        this.toastrService.error(err.error, 'Ocurrio un error')
      }
    );
  }

  public compare_codes(code1: PhoneCode, code2: PhoneCode){
    if (code2 && code1)
      return code1._id == code2._id;
    return false;
  }

  public make_phone_form_group(){
    return this.formBuilder.group({
      code: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required)
    });
  }

  public phone_number_field_is_valid(form: FormGroup):boolean{
    const control =  form.get('number');
    if (control){
      return control.invalid && control.touched;
    }
    return false;
  }
  public phone_code_field_is_valid(form: FormGroup):boolean{
    const control =  form.get('code');
    if (control){
      return control.invalid && control.touched;
    }
    return false;
  }

  public add_phone_fun(){
    this.phoneService.add_phone_auth(this.add_phone).subscribe(
      phone => {
        this.phone_numbers.push(phone);
        this.toastrService.success(undefined, 'Registro exitoso');
        this.add_phone = new PhoneNumber('');
        this.add_phone_form.reset();
      }, err => {
        this.toastrService.error(err.error, 'Ocurrio un error');
      }
    );
  }

  public delete_phone(i: number){
    const phone: PhoneNumber = this.phone_numbers[i];
    if (confirm('¿Estas seguro de eliminar este telefono?')){
      this.phoneService.delete_phone_auth(phone).subscribe(
        phone_deleted => {
          this.phone_numbers.splice(i, 1);
          this.toastrService.success(undefined, 'El telefono a sido eliminado.')
        }, err => {
          this.toastrService.error(err.error, 'Ocurrio un error');
        }
      );
    }
  }


  public validate_phone(phone: PhoneNumber){
    const number_control: FormControl = new FormControl('', Validators.required);
    const code_control: FormControl= new FormControl('', Validators.required);
    number_control.setValue(phone.number);
    code_control.setValue(phone.code);
    return number_control.valid && code_control.valid;
  }

  public update_phone(phone: PhoneNumber){
    this.phoneService.update_phone_auth(phone).subscribe(
      phone_updated => {
        this.toastrService.success(undefined, 'Telefono Actualizado');
        phone.number = phone_updated.number;
        phone._id = phone_updated._id;
        phone.code = phone.code;
        phone.user = phone.user;
      }, err => {
        this.toastrService.error(err.error, 'Ocurrio un error');
      }
    );

  }

  ngOnInit(): void {
  }

}
