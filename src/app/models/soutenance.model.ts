
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
