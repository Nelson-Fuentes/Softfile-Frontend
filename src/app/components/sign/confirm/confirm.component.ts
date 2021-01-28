import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';
import { EmailService } from 'src/app/services/email/email.service';
import { ModuleDataService } from 'src/app/services/module_data/module-data.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  private title: string = 'Confirmación de correo electronico';
  private token: string = '';

  constructor(
    private moduleDataService : ModuleDataService,
    private activatedRoute: ActivatedRoute,
    private emailService: EmailService,
    private toastrService: ToastrService
  ) {
    this.moduleDataService.title = this.title;
    this.token = this.activatedRoute.snapshot.params.token;
    this.emailService.validate_email(this.token).subscribe( message =>{
      this.toastrService.success(message.message, 'Validación exitosa');
    }, error => {
      this.toastrService.error(error.error.message, 'No se pudo validar su correo.')
    } );
   }

  ngOnInit(): void {
  }

}
