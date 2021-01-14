import { Component, OnInit } from '@angular/core';
import { Resource } from '../../../../models/resource'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public resources: Resource [] = [
    new Resource ("Dashboard", "fa fa-bar-chart", "dashboard"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
