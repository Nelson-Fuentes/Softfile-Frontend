import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public full_screen_flag: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setFullScreen(flag: boolean){
    this.full_screen_flag = flag;
  }

}
