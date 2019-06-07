import {Payment} from './Payment';
import {User} from './User';

export class PaymentPart {
  public id: number;
  public sumPercentage: number;
  public payment: Payment;
  public user: User;


  constructor(id: number, sumPercentage: number, payment: Payment) {
    this.id = id;
    this.sumPercentage = sumPercentage;
    this.payment = payment;
  }
}
