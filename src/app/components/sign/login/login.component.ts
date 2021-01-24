import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ModuleDataService } from 'src/app/services/module_data/module-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private title: string = "Inicio de Sesión"

  constructor(
    private moduleDataService : ModuleDataService
  ) {
    this.moduleDataService.title = this.title;
   }

  ngOnInit(): void {
  }
}
