import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = new User(0, "", "", "", "");

  constructor(private httpClient: HttpClient) {
    const savedUser = localStorage.getItem('userData');
    if (savedUser) {
      this.user = JSON.parse(savedUser);
    }
  }

  setUser(user: User): void {
    this.user = user;
    localStorage.setItem('userData', JSON.stringify(this.user));
  }

  getUser(): User {
    return this.user;
  }

  public updateUser(id: number, username: string, email: string, password: string) {
    let body = {
      "id": id,
      "username": username,
      "email": email,
      "password": password,
      "userRole": "USER"
    }

    return this.httpClient.post(`http://localhost:8080/api/users/${id}`, body);
  }

  public deleteUser(id: number) {
    return this.httpClient.delete(`http://localhost:8080/api/users/${id}`);
  }
}
