export class User {
  private _id?: string;
  private _username: string;
  private _email: string;
  private _password: string;
  private _userRole: string;

  constructor(username: string, email: string, password: string, userRole: string) {
    this._username = username;
    this._email = email;
    this._password = password;
    this._userRole = userRole;
  }

  get id(): string {
    return this._id ?? '';
  }

  set id(id: string) {
    this._id = id;
  }

  get username(): string {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  get userRole(): string {
    return this._userRole;
  }

  set userRole(userRole: string) {
    this._userRole = userRole;
  }
}
