import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/User';
import {Observable} from 'rxjs';
import {Wallet} from '../model/Wallet';
import {PaymentPart} from '../model/PaymentPart';

@Injectable({
  providedIn: 'root'
})
export class PaymentPartService {

  public headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private httpClient: HttpClient) {}

  public getWalletPaymentParts(walletId: number): Observable<PaymentPart[]> {
    const url = 'http://localhost:8080/' + 'wallet/' + walletId.toString() + '/paymentparts';
    console.log('URL is: ' + url);
    return this.httpClient.get<PaymentPart[]>(url, {headers: this.headers}).pipe();
  }

}
