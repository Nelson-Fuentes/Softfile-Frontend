import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from 'src/app/services/email/email.service';
import { ModuleDataService } from 'src/app/services/module_data/module-data.service';
import { Router } from '@angular/router';

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
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.moduleDataService.title = this.title;
    this.token = this.activatedRoute.snapshot.params.token;
    this.emailService.validate_email(this.token).subscribe( message =>{
      this.toastrService.success(message.message, 'Validación exitosa');
    }, error => {
      this.toastrService.error(error.error.message, 'No se pudo validar su correo.')
    }, () => {
      this.router.navigate(['sign/in']);
    });
   }

  ngOnInit(): void {
  }

}
