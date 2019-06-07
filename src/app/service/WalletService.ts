import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Wallet} from '../model/Wallet';
import {Observable} from 'rxjs';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  public headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private httpClient: HttpClient) {}

  public getUserWallets(username: String): Observable<Wallet[]> {
    const url = 'http://localhost:8080/' + 'wallets/' + username;
    console.log('URL is: ' + url);
    return this.httpClient.get<Wallet[]>(url, {headers: this.headers}).pipe();
  }

}
