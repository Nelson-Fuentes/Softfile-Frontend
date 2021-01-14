import { Component, OnInit } from '@angular/core';
import { Resource } from '../../../../models/resource'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public resources: Resource [] = [
    new Resource ("Dashboard 0", "fa fa-bar-chart", ""),
    new Resource ("Dashboard 1", "fa fa-bar-chart", "#"),
    new Resource ("Dashboard 2", "fa fa-bar-chart", "#"),
    new Resource ("Dashboard 3", "fa fa-bar-chart", "#"),
    new Resource ("Dashboard 4", "fa fa-bar-chart", "#"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
