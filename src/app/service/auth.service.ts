import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin= false;
  constructor() { }

  checkLogin() {
    let token = localStorage.getItem('token')
    return !!token;
  }
}
