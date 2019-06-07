import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private httpClient: HttpClient) {}

  public validateUser(user: User): Observable<User> {
    const url = 'http://localhost:8080/' + 'validate/' + JSON.stringify(user);
    console.log('URL is: ' + url);
    return this.httpClient.get<User>(url, {headers: this.headers}).pipe();
  }

}
