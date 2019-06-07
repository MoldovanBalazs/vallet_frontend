export class Payment {

  public id: number;
  public sum: number;
  public date: Date;

  constructor(id: number, sum: number, date: Date) {
    this.id = id;
    this.sum = sum;
    this.date = date;
  }
}
