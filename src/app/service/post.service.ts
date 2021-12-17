import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  create(data: any) : Observable<any> {
    return this.httpClient.post(environment.API_URL , data )
  }

  showPublic(): Observable<any> {
    return this.httpClient.get(environment.API_URL + 'ppl')
  }
}
