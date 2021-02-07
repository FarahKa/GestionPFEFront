export class Session {
    id: number;
    nom: string;
    start_date: Date;
    end_date: Date;
    constructor(
      id: number, 
      nom: string, 
      start_date: Date, 
      end_date: Date
  ) {
      this.id = id;
      this.nom = nom;
      this.start_date = start_date;
      this.end_date = end_date;
    }
  
  }