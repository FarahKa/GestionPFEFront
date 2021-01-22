import { FiliereEnum } from "../enums/filere.enum";
import { User } from "./user.model";

export class Student extends User{
  id_number: number;
  filiere: FiliereEnum;
  year: number;
  constructor(cin: string,
            firstname: string, lastname: string,
            id_number: number, year: number) {

    super(cin, firstname, lastname);
    this.id_number = id_number;
    this.filiere = FiliereEnum.gl;
    this.year = year
  }
}
