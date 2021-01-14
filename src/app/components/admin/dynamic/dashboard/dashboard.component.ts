import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() title_catch_event = new EventEmitter<string>();
  public title : string = "Dashboard"
  constructor() { }

  ngOnInit(): void {
    this.title_catch_event.emit(this.title);
  }

}
