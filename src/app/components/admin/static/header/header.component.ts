import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  full_screen_flag: boolean | undefined;

  @Output() full_screen_event = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.full_screen_flag = false;
  }

  public setFullScreenFlag(){
    this.full_screen_flag = !this.full_screen_flag;
    this.full_screen_event.emit(this.full_screen_flag);
  }

}
