export class User {
    cin: string;
    firstname: string;
    lastname: string;
    constructor(cin: string, firstname: string, lastname: string) {
        this.cin = cin;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}