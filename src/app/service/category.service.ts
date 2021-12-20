import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(environment.API_URL + 'ppl/category');
  }

  getPostByCategory(id: any): Observable<any> {
    // @ts-ignore
    return this.http.get(environment.API_URL + `ppl/posts/${id}`);
  }
  getCategoryDetail(id: any): Observable<any> {
    return this.http.get(environment.API_URL+ `ppl/category/${id}`);
  }
}
