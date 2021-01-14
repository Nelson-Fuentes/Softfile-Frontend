import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ModuleDataService {

  ACTION_FORM: number = 0;
  private title: string = "";
  private action?: number = undefined
  constructor(

  ) { }

  public getTitle(): string {
    return this.title;
  }

  public getAction(): number  | undefined{
    return this.action;
  }

  public setTitle(title : string): void {
    this.title =title;
  }

  public setAction(action? : number): void {
    this.action = action;
  }

}
