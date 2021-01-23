export class User {
    cin: string;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: number;
    constructor(cin: string, firstname: string, lastname: string,
         email: string, phoneNumber: number) {
        this.cin = cin;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}