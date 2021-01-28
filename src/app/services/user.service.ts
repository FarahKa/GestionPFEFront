import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAllAdmins() {
        return this.http.get<User[]>(`/users`);
    }
    getAllUsers() {
        return this.http.get<User[]>(`/users`);
    }

    getAdminById(cin: number) {
        return this.http.get<User>(`/users/` + cin);
    }

    registerAdmin(user: User) {
        return this.http.post(`/users/register`, user);
    }

    updateAdmin(user: User) {
        return this.http.put(`/users/` + user.cin, user);
    }

    deleteAdmin(cin: number) {
        return this.http.delete(`/users/` + cin);
    }
}