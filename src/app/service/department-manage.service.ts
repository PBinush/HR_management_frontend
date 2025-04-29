import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentManageService {
  private baseUrl = "http://localhost:8080/api/department"
  constructor(private http:HttpClient) { }

  getAllDepartments(): Observable<Department[]> {
      return this.http.get<Department[]>(`${this.baseUrl}/getAll`);
  }
  saveDepartment(department:Department): Observable <String>{
    return this.http.post<String>(`${this.baseUrl}/save`, department);
  }
  getDepartmentById(departmentId: number): Observable<Department> {
    return this.http.get<Department>(`${this.baseUrl}/getById`, {
      params: { departmentId }
    });
  }
  updateDepartment(department: Department): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/update`, department);
  }
  deleteDepartment(departmentId: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/delete`, {
      params: { departmentId }
    });
  }  
}
