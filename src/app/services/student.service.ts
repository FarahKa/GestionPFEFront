
import { baseURL } from '../shared/baseUrl';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './../models/student.model';



@Injectable({ providedIn: 'root' })
export class StudentService {
    constructor(private http: HttpClient) { }

    getAllStudents() {
        return this.http.get<Student[]>(`/students`);
    }

    getStudentById(cin: number) {
        return this.http.get<Student>(`/students/` + cin);
    }

    registerStudent(student: Student) {
       return this.http.post(`/students/register`, student);

    }

    updateStudent(student: Student) {
        return this.http.put(`/students/` + student.cin, Student);
    }

    deleteStudent(cin: number) {
        return this.http.delete(`/students/` + cin);
    }
}