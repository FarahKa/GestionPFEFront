import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({ providedIn: 'root' })
export class UserService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getAllAdmins() {
    return this.http.get<User[]>(this.url+`/users`);
  }
  getAllUsers() {
    return this.http.get<User[]>(this.url+`/users`);
  }

  getAdminById(cin: number) {
    return this.http.get<User>(this.url+`/users/` + cin);
  }

  registerUser(user: User) {
    return this.http.post(this.url+`/users/register`, user);
  }

  updateAdmin(user: User) {
    return this.http.put(this.url+`/users/` + user.cin, user);
  }

  deleteAdmin(cin: number) {
    return this.http.delete(this.url+`/users/` + cin);
  }
}
