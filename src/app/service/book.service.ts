import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
const API_URL = `${environment.API_URL}`;
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {}
    getAll(): Observable<any>{
    return this.httpClient.get(environment.API_URL)

  }
  getById(id:number): Observable<any> {
    return this.httpClient.get(environment.API_URL + id)
  }

  destroy(id: number): Observable<any>  {
    return this.httpClient.delete(environment.API_URL  + id)
  }

  create(data: any) : Observable<any> {
    return this.httpClient.post(environment.API_URL , data )
  }

  edit(id: number, data: any): Observable<any> {
    return this.httpClient.put(environment.API_URL + id, data)
  }
}
