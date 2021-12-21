import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  create(data: any) : Observable<any> {
    return this.httpClient.post(environment.API_URL , data );
  }


  showPublic(page: number, pageSize: number): Observable<any> {

    return this.httpClient.get(environment.API_URL + 'ppl?page='+page+'&pageSize='+pageSize)

  }
  showDetailPost(id : any): Observable<any> {
    let token = localStorage.getItem('token')
    console.log(token)
    let header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    return this.httpClient.get(environment.API_URL + `posts/detail/${id}`, header );
  }

  showPostWithAuthor(id: any): Observable<any> {
    return this.httpClient.get(environment.API_URL + `ppl/ofUser/${id}`);
  }
  deletePost(id : any): Observable<any>{
    let token = localStorage.getItem('token')
    console.log(token)
    let header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    return this.httpClient.delete(environment.API_URL + `users/delete/${id}`, header )
  }
  getPostById(id : any): Observable<any>{
    let token = localStorage.getItem('token')
    console.log(token)
    let header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    return this.httpClient.get(environment.API_URL + `users/getPost/${id}`, header)
  }
  editPost(id : any,data : any): Observable<any>{
    let token = localStorage.getItem('token')
    console.log(token)
    let header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    return this.httpClient.post(environment.API_URL + `users/editPost/${id}`,data, header )
  }
}
