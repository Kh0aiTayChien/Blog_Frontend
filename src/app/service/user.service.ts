import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getPostByUser(): Observable<any> {
    let token = localStorage.getItem('token')
    console.log(token)
    let header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    console.log(header)
    return this.http.get<any>(environment.API_URL + 'users/posts', header)
  }
  editProfileUser(data : any): Observable<any> {
    let token = localStorage.getItem('token')
    console.log(token)
    let header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    return this.http.put<any>(environment.API_URL + 'users/editProfile' , data , header)
  }
  getById(): Observable<any>{
    let token = localStorage.getItem('token')
    console.log(token)
    let header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    return this.http.get<any>(environment.API_URL + 'users/getUserById',header)
  }
  createPost(data : any): Observable<any>{
    let token = localStorage.getItem('token')
    console.log(token)
    let header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    return this.http.post<any>(environment.API_URL + 'users/create/post',data,header)
  }
  getCategories(): Observable<any>{
    let token = localStorage.getItem('token')
    console.log(token)
    let header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    return this.http.get<any>(environment.API_URL + 'users/getCategories',header)
  }
  updateImage(data : any): Observable<any>{
    let token = localStorage.getItem('token')
    console.log(token)
    let header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    return this.http.post<any>(environment.API_URL + 'users/updateImage',data, header)
  }

}
