import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({ providedIn: 'root' })
export class UserService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getAllAdmins() {
    return this.http.get<User[]>(this.url+`/admin/all`);
  }
  getAllUsers() {
    return this.http.get<User[]>(this.url+`/users`);
  }

  getAdminById(cin: string) {
    console.log("sadsad",this.url+`/admin/` + cin);
    return this.http.get<any>(this.url+`/admin/` + cin);
  }

  registerUser(user: User) {
    return this.http.post(this.url+`/users/register`, user);
  }

  updateAdmin(user: User) {
    return this.http.put(this.url+`/admin/update/` + user.cin, user);
  }

  deleteAdmin(cin: string) {
    return this.http.delete(this.url+`/admin/delete/` + cin);
  }

  importUsers(files: FormData){
    console.log(files);
   return this.http.post(this.url + `/users/import/` ,files);
}
}
