import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog';
  show = true;
  color = 'violet';
  getTitle() {
    return this.title;
  }
  obj = { name: 'krishndaas', age: 24 };
  arr = ['kesav', 'madhav', 'damodar'];
  a = 10;
  b = 20;
  name = 'radhaMadhav';

  myEvent(evt: string) {
    console.log(evt);
  }
  currentVal = '';
  getVal(val: any) {
    console.log(val);
    this.currentVal = val;
  }
  disabledBox = true;

  enableBox() {
    this.disabledBox = false;
  }
}
