export class User {

  public name: string;
  public username: string;
  public password: string;

  constructor(name?: string, username?: string, password?: string) {
    this.name = name;
    this.username = username;
    this.password = password;
  }

}
