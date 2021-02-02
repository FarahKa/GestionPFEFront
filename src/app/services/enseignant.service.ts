import { DepEnum } from './../enums/departement.enum';
import { Teacher } from 'src/app/models/teacher.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private teacherUrl = 'http://localhost:3000/teachers/';
    constructor(private http: HttpClient) { }

    getAllTeachers() {
        return this.http.get<[Teacher]>(this.teacherUrl + `all`);
    }

    getTeacherById(id: number) {
        return this.http.get<Teacher>(this.teacherUrl + `teacher/` + id);
    }

    registerTeacher(Teacher: Teacher) {
       return this.http.post(`/teachers/register`, Teacher);

    }

    updateTeacher(Teacher: Teacher) {
        return this.http.put(this.teacherUrl + `update/` + Teacher.cin,Teacher);
    }

    getTeachersByDepartement(departement: DepEnum) {
        return this.http.get<Teacher[]>(this.teacherUrl  + departement)
    }

    
    deleteTeacher(id: number) {
        return this.http.delete(this.teacherUrl  + id);
    }
}
