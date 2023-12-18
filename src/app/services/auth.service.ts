import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public register(username: string, email: string, password: string, confirmPassword: string) {
    let body = {
      "username": username,
      "email": email,
      "password": password,
      "confirmPassword": confirmPassword
    }

    return this.httpClient.post('http://localhost:8080/api/users/register', body);
  }
}
