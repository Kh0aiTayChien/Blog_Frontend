import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = `${environment.API_URL}`;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(data: any): Observable<any>{
    return this.http.post<any>(API_URL + 'login' , data);
  }

  logout(): Observable<any>{
    return this.http.post<any>(API_URL + 'logout', null);
  }

  register(data: any): Observable<any>{
    return  this.http.post<any>(API_URL + 'register' , data);
  }
}
