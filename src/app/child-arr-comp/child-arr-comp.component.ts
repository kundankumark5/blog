import { Component, OnInit, Input } from '@angular/core'; // add input here

@Component({
  selector: 'app-child-arr-comp',
  templateUrl: './child-arr-comp.component.html',
  styleUrls: ['./child-arr-comp.component.scss'],
})
export class ChildArrCompComponent implements OnInit {
  @Input() hero:any;
  constructor() {}

  ngOnInit(): void {}
}
