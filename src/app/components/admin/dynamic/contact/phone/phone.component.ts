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

  ngOnInit(): void {
  }

}
