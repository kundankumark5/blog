import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Service4APIService {
  constructor(private httpClientInstance: HttpClient) {}
  getDataFromApi() {
    let url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.httpClientInstance.get(url);
  }
}
