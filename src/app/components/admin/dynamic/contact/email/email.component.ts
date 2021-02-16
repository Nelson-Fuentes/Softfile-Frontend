import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  ngOnInit(): void {
  }

}
