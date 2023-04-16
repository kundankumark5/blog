import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataServiceService {
  constructor() {}

  getData() {
    return {
      name: 'Ankit',
      age: 30,
      id: 10,
    };
  }
}
