import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    let token = localStorage.getItem('token')
    let header = {
      headers : new HttpHeaders().set('Authorization',`Bearer ${token}` )
    }
    console.log(header)
    return this.http.get(environment.API_URL + 'users',header);
  }

  delete(id: any): Observable<any> {
    let token = localStorage.getItem('token')
    let header = {
      headers : new HttpHeaders().set('Authorization',`Bearer ${token}` )
    }
    return this.http.delete(environment.API_URL + `users/${id}`,header);
  }
}
