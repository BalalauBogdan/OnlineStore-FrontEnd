import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = new User("", "", "", "");
  private userObservable = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) { }

  getUserList() {
    return this.userObservable.asObservable();
  }

  setUser(user: User): void {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }

  public readUsers() {
    this.httpClient.get('http://localhost:8080/api/users/').subscribe((response: any) => {
      this.userObservable.next(response.data);
    });
  }

  public updateUser(id: string, username: string, email: string, password: string) {
    let body = {
      "id": id,
      "username": username,
      "email": email,
      "password": password,
      "userRole": "USER"
    }

    return this.httpClient.post(`http://localhost:8080/api/users/${id}`, body);
  }

  public deleteUser(id: string) {
    return this.httpClient.delete(`http://localhost:8080/api/users/${id}`);
  }
}
