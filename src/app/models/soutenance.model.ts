import { Session } from "../models";
import { Pfe } from "./pfe.model";
import { Teacher } from "./teacher.model";

export class Soutenance {
    id: number;
    date: Date;
    session: Session; /** ? */
    pfe: Pfe;
    encadrants: Teacher[]
}
