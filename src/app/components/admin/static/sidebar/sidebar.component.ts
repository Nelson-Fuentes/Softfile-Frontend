import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Resource } from '../../../../models/resource'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public resources: Resource [] = [
    new Resource ("Dashboard", "fa fa-bar-chart", "dashboard"),
    new Resource ("Contacto", "fa fa-id-card", "contact"),
    new Resource ("Estudios", "fa fa-graduation-cap", "study"),
  ]

  @Output() full_screen_event = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public hide(){
    this.full_screen_event.emit(false);
  }

}
