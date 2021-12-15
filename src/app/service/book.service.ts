import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {}
    getAll(): Observable<any>{
    return this.httpClient.get(environment.URL_API)

  }
  getById(id:number): Observable<any> {
    return this.httpClient.get(environment.URL_API + id)
  }

  destroy(id: number): Observable<any>  {
    return this.httpClient.delete(environment.URL_API  + id)
  }

  create(data: any) : Observable<any> {
    return this.httpClient.post(environment.URL_API , data )
  }

  edit(id: number, data: any): Observable<any> {
    return this.httpClient.put(environment.URL_API + id, data)
  }
}
