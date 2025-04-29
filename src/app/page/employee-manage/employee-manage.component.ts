import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-manage',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './employee-manage.component.html',
  styleUrl: './employee-manage.component.css'
})
export class EmployeeManageComponent implements OnInit{
  employeeList: any;
  employeeForm!: FormGroup<any>;
  deleteEmployee: any;


ngOnInit(): void {
  throw new Error('Method not implemented.');
}

submitForm() {
throw new Error('Method not implemented.');
}

onUpdate() {
throw new Error('Method not implemented.');
}

onClear() {
throw new Error('Method not implemented.');
}

onSearch() {
  throw new Error('Method not implemented.');
}
}
