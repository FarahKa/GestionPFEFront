import { Session } from "../models";
import { Pfe } from "./pfe.model";
import { Teacher } from "./teacher.model";

export class Soutenance {
    id: number;
    date: Date;
    sessionId: number; 
    pfeId: number;
    constructor(id: number, date: Date, session: number, pfe: number) {
        this.id = id;
        this.date = date;
        this.sessionId = session;
        this.pfeId = pfe;
    }
}
