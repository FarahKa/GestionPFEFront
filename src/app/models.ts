export class Soutenance {
  nom: string;
  etudiant: string;
}

export class Session {
  id: number;
  nom: string;
  start_date: Date;
  end_date: Date;
  filieres: Filiere[];
}
export class Filiere {
  nom: string;
  soutenances: Soutenance[];
}
