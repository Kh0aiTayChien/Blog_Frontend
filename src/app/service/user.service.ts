import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getPostByUser():Observable<any>{
      let token = localStorage.getItem('token')
      let header = {
        headers : new HttpHeaders().set("Authorization",`Breaker ${token}`)
      }
      return this.http.get<any>(environment.API_URL + 'user/posts',header)
  }


}
