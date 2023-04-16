import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss'],
})
export class ChildCompComponent implements OnInit {
  // @Input() inherit: any;
  @Input() inherit2: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.inherit2);    // if want to see fetched data from parent
  }
}
