import { DepEnum } from "../enums/departement.enum";
import { User } from "./user.model";

export class Teacher extends User{
    departement: DepEnum;
    constructor(cin: string,
        firstname: string, lastname: string,
        email: string, phoneNumber: number,
        departement: DepEnum
        ) {
        super(cin, firstname, lastname, email, phoneNumber);
        this.departement = departement;
}
}
