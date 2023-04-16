import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.scss'],
})
export class ChildToParentComponent implements OnInit {
  @Output() childToParentData: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // this.childToParentData.emit('ram'); or if we want obj
    // this.childToParentData.emit({ name: 'ram', age: 4 });
  }
  // if we want to show this child comp's data on btn click call btn click func and pass whatever we passed in onInit

  sendAndDisplayData() {
    let item = { name: 'ram', age: 4 };
    this.childToParentData.emit(item);
  }
}
