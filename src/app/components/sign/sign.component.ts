import { Component, OnInit } from '@angular/core';
import { ModuleDataService } from 'src/app/services/module_data/module-data.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(
    private moduleDataService: ModuleDataService
  ) { }

  ngOnInit(): void {
  }

  public getTitle() : string{
    return this.moduleDataService.title;
  }

}
