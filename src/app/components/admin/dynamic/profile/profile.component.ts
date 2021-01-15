import { Component, OnInit } from '@angular/core';
import { ModuleDataService } from 'src/app/services/module_data/module-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public title: string = "Perfil de usuario";

  constructor(
    private moduleDataService: ModuleDataService
  ) {
    this.moduleDataService.title = this.title;
    this.moduleDataService.action = this.moduleDataService.ACTION_FORM;
  }

  ngOnInit(): void {
  }

}
