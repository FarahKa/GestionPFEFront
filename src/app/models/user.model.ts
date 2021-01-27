import { Role } from './role.model';
export class User {
    cin: string;
    firstname: string;
    lastname: string;
    email: string;
    username:string;
    phoneNumber: number;
    token: string;
    role: Role;
    constructor(cin: string, firstname: string, lastname: string,
         email: string, phoneNumber: number) {
        this.cin = cin;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}