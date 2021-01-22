import { Session } from "../models";
import { Pfe } from "./pfe.model";

export class Soutenance {
    id: number;
    date: Date;
    session: Session;
    pfe: Pfe
}