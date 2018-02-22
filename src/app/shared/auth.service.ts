import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  isLogIn: boolean;
  isAdmin: boolean;
  constructor(
    private http: HttpClient
  ) { }
}
