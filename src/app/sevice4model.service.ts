import { Injectable } from '@angular/core';
import { datatype } from './user';

@Injectable({
  providedIn: 'root',
})
export class Sevice4modelService {
  constructor() {}

  // function for model   upmost we have interface datatype for the same
  getData() {
    const data:datatype = {
      name: 'anil',
      id: 200,
      indian: true,
      address: '42 noida',
    };
    return data;
  }
}
