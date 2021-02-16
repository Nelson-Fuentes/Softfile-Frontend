import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from 'src/app/services/email/email.service';
import { Email } from '../../../../../models/email';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  public emails:Email [] = [];
  public current_page:number = 1;

  public add_email_form: FormGroup  = this.formBuilder.group({
    email: new FormControl('' , [Validators.required, Validators.email])
  });

  constructor(
    private emailService: EmailService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {
    this.emailService.get_emails_auth().subscribe(
      emails => {
        this.emails = emails;
      }, err => {
        this.toastrService.error(err.error, 'Ocurrio un error')
      }
    );
  }

  public email_field_is_valid(form: FormGroup):boolean{
    const control =  form.get('email');
    if (control){
      return control.invalid && control.touched;
    }
    return false;
  }

  public add_email(){
    const new_email: string = this.add_email_form.value.email;
    this.emailService.add_email_auth(new_email).subscribe(
      email_new=> {
        const repeated =  this.emails.filter(email => email._id == email_new._id )
        if (repeated.length> 0){
          this.toastrService.info('Correo registrado previamente pero no valdiado a sido asignado a este usuario', 'Correo Reasignado');
          repeated[0].adress = email_new.adress;
          repeated[0].validated = email_new.validated;
        } else {
          this.toastrService.success('Revisar correo para validar su correo', 'Correo asinado con exito');
          this.emails.push(email_new)
        }
        this.add_email_form.reset();
      }, err => {
        this.toastrService.error(err.error, 'Ocurrio un error')
      }
    );
  }

  public delete_email (email: Email, i: number){
    if(confirm('¿Esta seguro de querer eliminar este correo?')){
      this.emailService.delete_email_auth(email._id+'').subscribe(
        email => {
          this.toastrService.success('', 'Correo elminado con exito')
          this.emails.splice(i, 1);

        }, err => {
          this.toastrService.error(err.error, 'Ocurrio un error')
        }
      );
    }
  }

  public make_form_group():FormGroup{
    return this.formBuilder.group({
      email: new FormControl('' , [Validators.required, Validators.email])
    });;
  }

  public get_form_control_for_email(email: Email){
    const form_control = new FormControl('', [Validators.required, Validators.email]);
    form_control.setValue(email.adress);
    return form_control;
  }

  public update_email_auth(email: Email){
    this.emailService.update_email_auth(email._id+'', email.adress).subscribe(
      email_updated => {
        email._id = email_updated._id;
        email.adress = email_updated.adress;
        email.validated = email_updated.validated;
        this.toastrService.success('Revise su correo para validar', 'Actualización exitosa')
      }, err => {
        this.toastrService.error(err.error, 'Ocurrio un erro')
      }
    );
  }

  ngOnInit(): void {
  }

}
