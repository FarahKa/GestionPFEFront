import { FiliereEnum } from "../enums/filere.enum";
import { User } from "./user.model";

export class Student extends User{
  student_id_number: number;
  filiere: FiliereEnum;
  year: number;
  constructor(cin: string,
            firstname: string, lastname: string,
            email: string, phoneNumber: number,
            student_id_number: number, filiere: FiliereEnum, year: number) {

    super(cin, firstname, lastname, email, phoneNumber);
    this.student_id_number = student_id_number;
    this.filiere = filiere;
    this.year = year
  }
}
