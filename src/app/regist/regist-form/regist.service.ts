import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegistService {

  constructor(
    private http: HttpClient
  ) { }

  regist(
    name: string,
    password: string
  ) {
    return this.http.post('/Users', {
      name,
      password
    });
  }
}
