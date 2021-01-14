import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ModuleDataService } from 'src/app/services/module_data/module-data.service';

@Component({
  selector: 'app-module-template',
  templateUrl: './module-template.component.html',
  styleUrls: ['./module-template.component.css']
})
export class ModuleTemplateComponent implements OnInit {


  constructor(
    private moduleDataService : ModuleDataService
  ) { }

  ngOnInit(): void {
  }

}
