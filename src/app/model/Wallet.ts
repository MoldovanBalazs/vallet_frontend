import {PaymentPart} from './PaymentPart';

export class Wallet {

  public id: number;
  public sum: number;
  public registrationDate: Date;
  public expirationDate: Date;
  public currency: Currency;
  public paymentPart: PaymentPart[];


  constructor(id?: number, sum?: number, registrationDate?: Date, expirationDate?: Date, currency?: Currency) {
    this.id = id;
    this.sum = sum;
    this.registrationDate = registrationDate;
    this.expirationDate = expirationDate;
    this.currency = currency;
  }
}

export enum Currency {
  LEI, DOLLAR, EURO
}
