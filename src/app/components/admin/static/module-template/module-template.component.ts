import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModuleDataService } from 'src/app/services/module_data/module-data.service';

@Component({
  selector: 'app-module-template',
  templateUrl: './module-template.component.html',
  styleUrls: ['./module-template.component.css']
})
export class ModuleTemplateComponent implements OnInit, OnDestroy {


  constructor(
    private moduleDataService : ModuleDataService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.moduleDataService.title = "";
  }

  public getTitle(): string{
    return this.moduleDataService.title;
  }

  public getAction(): number | undefined{
    return this.moduleDataService.action;
  }

  public isForm(): boolean {
    return this.moduleDataService.isForm();
  }

}
