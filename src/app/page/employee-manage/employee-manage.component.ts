import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../../model/employee';
import { EmployeeManageService } from '../../service/employee-manage.service';

@Component({
  selector: 'app-employee-manage',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './employee-manage.component.html',
  styleUrl: './employee-manage.component.css'
})
export class EmployeeManageComponent implements OnInit{
  employeeList: Employee[]=[];
  employeeForm!: FormGroup;
  deleteEmployee: any;
  fb: any;
constructor(private employeeService:EmployeeManageService){}

ngOnInit(): void {
  this.loadAllEmployees();

  this.employeeForm = this.fb.group({
    id: [],
    employeeCode: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: [''],
    phone: [''],
    dateOfBirth: [''],
    joinDate: [''],
    gender: [''],
    department: [''],
    jobTitle: [''],
    active: [true],
    updateBy: ['']
  });
}

loadAllEmployees() {
  this.employeeService.getAllEmployees().subscribe(data => {
    this.employeeList = data.map(element => new Employee(
      element.id,
      element.employeeCode,
      element.name,
      element.email,
      element.address,
      element.phone,
      element.dateOfBirth,
      element.joinDate,
      element.gender,
      element.department,
      element.jobTitle,
      element.active,
      element.updateBy
    ));
  });
}

submitForm() {
  if (this.employeeForm.valid) {
    const employee = this.employeeForm.value;
    this.employeeService.saveEmployee(employee).subscribe(response => {
      alert(response);
      this.loadAllEmployees();
      this.employeeForm.reset();
    });
  }
}

onUpdate() {
  if (this.employeeForm.valid) {
    const employee = this.employeeForm.value;
    this.employeeService.updateEmployee(employee).subscribe(response => {
      alert(response);
      this.loadAllEmployees();
      this.employeeForm.reset();
    });
  }
}

onClear() {
  this.employeeForm.reset();
}

onSearch() {
  const id = this.employeeForm.get('id')?.value;
  if (id) {
    this.employeeService.getEmployeeById(id).subscribe(employee => {
      this.employeeForm.patchValue(employee);
    }, err => {
      alert("Employee not found");
    });
  } else {
    alert("Please enter an ID to search");
  }
}

onDelete(id: number) {
  if (confirm("Are you sure you want to delete this employee?")) {
    this.employeeService.deleteEmployee(id).subscribe(response => {
      alert(response);
      this.loadAllEmployees();
    });
  }
}

editEmployee(emp: Employee) {
  this.employeeForm.patchValue(emp);
}
}
