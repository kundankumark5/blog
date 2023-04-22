import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { UserDataServiceService } from './user-data-service.service';
import { Service4APIService } from './service4-api.service';
import { Callinlazy1Component } from './callinlazy1/callinlazy1.component';
import { Callinlazy2Component } from './callinlazy2/callinlazy2.component';
import {
  NgForm,
  FormControl,
  Validator,
  FormGroup,
  Validators,
} from '@angular/forms';
interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [
  {
    type: 'success',
    message: 'This is an success alert',
  },
  {
    type: 'info',
    message: 'This is an info alert',
  },
  {
    type: 'warning',
    message: 'This is a warning alert',
  },
  {
    type: 'danger',
    message: 'This is a danger alert',
  },
  {
    type: 'primary',
    message: 'This is a primary alert',
  },
  {
    type: 'secondary',
    message: 'This is a secondary alert',
  },
  {
    type: 'light',
    message: 'This is a light alert',
  },
  {
    type: 'dark',
    message: 'This is a dark alert',
  },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required),
  });
  onSubmit(data: any) {
    console.warn(data);
  }

  title = 'blog';
  show = true;
  err = false;
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
  data = [
    { name: 'rk', age: 7, email: 'xyz@gmail.com' },
    { name: 'mk', age: 8, email: 'xyz@gmail.com' },
    { name: 'ak', age: 9 },
  ];

  parentToChild: string = 'RadhaRaman';
  parentChild_Obj = {
    name: 'radhaRaman',
    place: 'golok',
    id: 1,
  };
  parentToChild_Arr = [
    {
      name: 'Anil',
      address: 'Noida',
      age: 30,
    },
    {
      name: 'Prajya',
      address: 'Grugram',
      age: 24,
    },
    {
      name: 'Ajay',
      address: 'Delhi',
      age: 23,
    },
  ];
  childToPar: any = {};
  childToParent(item: Object) {
    console.warn(item);
    this.childToPar = item;
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

  getUserValue(value: string) {
    console.log(value);
  }
  changeCol() {
    this.color = 'yellow';
  }

  alerts!: Alert[];
  nameFrmServices = '';
  apiDATA: any = [];
  constructor(
    private viewConainer: ViewContainerRef,
    private componentFactory: ComponentFactoryResolver,
    private userDAta: UserDataServiceService,
    private apiCall: Service4APIService
  ) {
    this.reset();
    let data = this.userDAta.getData();
    console.warn(this.userDAta.getData());
    this.nameFrmServices = data.name;
    this.apiCall.getDataFromApi().subscribe((resultFromAPI) => {
      console.log(resultFromAPI);
      this.apiDATA = resultFromAPI;
    });
  }
  async loadComp1() {
    this.viewConainer.clear();
    const { Callinlazy1Component } = await import(
      './callinlazy1/callinlazy1.component'
    );
    this.viewConainer.createComponent(
      this.componentFactory.resolveComponentFactory(Callinlazy1Component)
    );
  }
  async loadComp2() {
    this.viewConainer.clear();
    const { Callinlazy2Component } = await import(
      './callinlazy2/callinlazy2.component'
    );
    this.viewConainer.createComponent(
      this.componentFactory.resolveComponentFactory(Callinlazy2Component)
    );
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  today = Date.now();
  str = 'StringWithPips';
  val = 10;
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('pass');
  }

  prefilledValues = {
    email: 'test@mail.com',
    pass: 12345,
    add: 'Noida',
    mob: 56789678678,
  };

  preFilledReactive = new FormGroup({
    preReactiveEmail: new FormControl('anil@mail.com'),
    preReactivePass: new FormControl('1234'),
  });

  collectData(){
    console.warn(this.preFilledReactive.value);
  }
}
