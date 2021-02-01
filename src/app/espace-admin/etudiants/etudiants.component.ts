import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { StudentService } from 'src/app/services/student.service';
import { User } from './../../models/user.model';
import { FiliereEnum } from './../../enums/filere.enum';
import { Student } from './../../models/student.model';
import { Component, OnInit } from '@angular/core';
import { PrettySidebarService } from 'src/app/components/pretty-sidebar/pretty-sidebar.service';

/**
 * SAHAR HERES WHAT YOU GOTTA DO LENNA :
 * orbot bl back end (get etudiants 5eme, get etudiants licence, get etudiants master, get all etudiants)
 * (famma some functions ketbtelhom esmhom ema w7id le)
 * import w export
 */
@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  etudiants: Student[]
  etudiants_to_display: Student[]

  option: String;
  etudiants_contains_5eme: boolean;

  show_filieres: boolean;

  currentUser: User;
  currentUserSubscription: Subscription;

  users: Student[] = [];
  selectedItemSubject;

  filiere: String;


  constructor(
    private authenticationService: AuthentificationService,
    private studentService: StudentService,
    private sidebarService: PrettySidebarService
  ) {
  }

  ngOnInit(): void {
    this.filiere = ""
    this.option = "5ème"
    this.show_filieres = true
    this.etudiants = this.getEtudiants5eme()
    //this.loadAllUsers();
    // lenna 7ott get etudiants 5eme
    this.etudiants_contains_5eme = true;
    // keep etudiants 5eme lkol f this.etudiants w change l value mt3 etudiants_to_display bch we filter
    this.etudiants_to_display = this.etudiants;

    // this is for when we choose a specific filiere
    this.selectedItemSubject = this.sidebarService.subjectSelectedItem
    this.selectedItemSubject.subscribe(
      (item) => {
        this.option = item.option
        // check ken nzelna 3la specific filiere walla 3la toutes les filieres
        // this means li a7na emma ta7t licence walla 5eme
        if (Object.values(FiliereEnum).includes(item.item) || item.item == "Toutes les filières") {
          this.show_filieres = true
          // check ken n7ebbou licence walla 5eme
          if (item.option == "5ème") {
            // check ken ma3annech les etudiants mt3 e 5eme saved :
            if (!this.etudiants_contains_5eme) {
              // GET STUDENTS 5EME ML BACK AGAIN
              this.etudiants = this.getEtudiants5eme()
              this.etudiants_contains_5eme = true
            }
          } else {
            // GET ETUDIANTS LICENCE ML BACK
            this.etudiants = this.getEtudiantsLicence()
            this.etudiants_contains_5eme = false

          }
          if (item.item == "Toutes les filières") {
            this.etudiants_to_display = this.etudiants
            this.filiere = item.item
          }
          else {
            this.filiere = item.item
            this.etudiants_to_display = this.etudiants.filter((e) => { return e.filiere == item.item })
          }
        }
        else {
          switch (item.item) {
            case "Etudiants Master":
              this.etudiants = this.getEtudiantsMaster()
              this.etudiants_contains_5eme = false
              this.etudiants_to_display = this.etudiants
              this.show_filieres = false
              this.filiere = ""
              break;
            case "Importer Etudiants":
              // import
              break;
            case "Exporter Etudiants":
              // export
              break;

            default:
              // lenna ya3ni get all etudiants
              this.option = ""
              this.filiere = ""
              // get all etudiants 3la rou7ek
              this.etudiants_contains_5eme = false
              break;
          }
          this.etudiants_to_display = this.etudiants
        }
      })
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  getEtudiantsMaster(): Student[] {
    return [
      new Student("123", "people1", "people1", "people1@gamil", 123, 123, null, 2020),
      new Student("462", "people2", "people2", "people2@gmail", 462, 462, null, 2020),
      new Student("642", "people3", "people3", "people3@gmail", 8745, 8745, null, 2020)
    ];
  }

  getEtudiantsLicence(): Student[] {
    return [
      new Student("1230", "people1", "people1", "people1@gamil", 123, 123, FiliereEnum.gl, 2020),
      new Student("4620", "people2", "people2", "people2@gmail", 462, 462, FiliereEnum.iia, 2020),
      new Student("6420", "people3", "people3", "people3@gmail", 8745, 8745, FiliereEnum.rt, 2020)
    ];
  }

  getEtudiants5eme(): Student[] {
    return [
      new Student("123", "people1", "people1", "people1@gamil", 123, 123, FiliereEnum.gl, 2020),
      new Student("462", "people2", "people2", "people2@gmail", 462, 462, FiliereEnum.imi, 2020),
      new Student("642", "people3", "people3", "people3@gmail", 8745, 8745, FiliereEnum.bio, 2020)
    ];
  }



  /* ngOnDestroy() {
     // unsubscribe to ensure no memory leaks
     this.currentUserSubscription.unsubscribe();
     this.selectedItemSubject.unsubscribe();
   }
 */

  deleteUser(id: number) {
    this.studentService.deleteStudent(id).pipe(first()).subscribe(() => {
      this.loadAllUsers()
    });
  }

  // this should be get
  private loadAllUsers() {
    this.studentService.getAllStudents().pipe(first()).subscribe(etudiants => {
      this.etudiants = etudiants;
      console.log(this.etudiants);
    });
  }
}
