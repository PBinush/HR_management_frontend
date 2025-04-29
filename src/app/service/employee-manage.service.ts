import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeManageService {
  private baseUrl = "http://localhost:8080/api/employee"
  constructor(private http:HttpClient){}

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/getAll`);
  }
  
  saveEmployee(employee: Employee): Observable<string> {
    return this.http.post(`${this.baseUrl}/save`, employee, { responseType: 'text' });
  }

  updateEmployee(employee: Employee): Observable<string> {
    return this.http.put(`${this.baseUrl}/update`, employee, { responseType: 'text' });
  }

  getEmployeeById(employeeId: number): Observable<Employee> {
    const params = new HttpParams().set('employeeId', employeeId.toString());
    return this.http.get<Employee>(`${this.baseUrl}/getById`, { params });
  }

  deleteEmployee(employeeId: number): Observable<string> {
    const params = new HttpParams().set('employeeId', employeeId.toString());
    return this.http.delete(`${this.baseUrl}/delete`, { params, responseType: 'text' });
  }
}
