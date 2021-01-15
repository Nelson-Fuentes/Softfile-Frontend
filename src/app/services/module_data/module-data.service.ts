import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ModuleDataService {

  ACTION_FORM: number = 0;
  public title: string = "";
  public action?: number = undefined
  constructor(

  ) { }

  public isForm() : boolean {
    return this.action == this.ACTION_FORM;
  }

}
