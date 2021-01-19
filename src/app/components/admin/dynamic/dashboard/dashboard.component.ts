import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModuleDataService } from 'src/app/services/module_data/module-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public title : string = "Dashboard"

  constructor(
    private moduleDataService: ModuleDataService
  ) {
    this.moduleDataService.title = this.title;
    this.moduleDataService.action = undefined;
  }

  ngOnInit(): void {

  }

}
