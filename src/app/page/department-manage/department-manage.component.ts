import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-manage',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './department-manage.component.html',
  styleUrl: './department-manage.component.css'
})
export class DepartmentManageComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
}
