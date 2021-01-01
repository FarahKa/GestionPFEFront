export class Soutenance {
    nom: string;
    etudiant: string;
  }
  
  export class Session {
    nom: string;
    filieres : Filiere[];

  }
export class Filiere {
    nom: string;
    soutenances: Soutenance[];
}  