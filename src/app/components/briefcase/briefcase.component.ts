import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.css']
})
export class BriefcaseComponent implements OnInit {

  public user_id: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.user_id = this.activatedRoute.snapshot.params.id;
    console.log(this.user_id);
  }

  ngOnInit(): void {
  }

}
