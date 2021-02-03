
import { baseURL } from '../shared/baseUrl';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './../models/student.model';
import { FiliereEnum } from '../enums/filere.enum';



@Injectable({ providedIn: 'root' })
export class StudentService {
    private studentUrl = 'http://localhost:3000/etudiants/';
    constructor(private http: HttpClient) { }

    getAllStudents() {
        return this.http.get<Student[]>(this.studentUrl + `all`);
    }

    getStudentById(id: number) {
        return this.http.get<Student>(this.studentUrl + `etudiant/` + id);
    }

    registerStudent(student: Student) {
       return this.http.post(`/students/register`, student);

    }

    updateStudent(student: Student, idSoutenance: number) {
        return this.http.put(this.studentUrl + `update/` + student.student_id_number, idSoutenance);
    }

    getStudentsByFiliere(filiere: FiliereEnum) {
        return this.http.get<Student[]>(this.studentUrl + filiere)
    }

    
    deleteStudent(id: number) {
        return this.http.delete(this.studentUrl + id);
    }
    importStudents(files: FormData){
        console.log(files);
       return this.http.post(this.studentUrl + `import/` ,files);
    }
}