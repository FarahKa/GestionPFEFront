import { FiliereEnum } from "../enums/filere.enum";
import { User } from "./user.model";

export class Student extends User{
  id_number: number;
  filiere: FiliereEnum;
  year: number;
  constructor(cin: string,
            firstname: string, lastname: string,
            email: string, phoneNumber: number,
            id_number: number, filiere: FiliereEnum, year: number) {

    super(cin, firstname, lastname, email, phoneNumber);
    this.id_number = id_number;
    this.filiere = filiere;
    this.year = year
  }
}
