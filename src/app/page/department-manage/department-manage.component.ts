import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Department } from '../../model/department';
import { DepartmentManageService } from '../../service/department-manage.service';

@Component({
  selector: 'app-department-manage',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './department-manage.component.html',
  styleUrl: './department-manage.component.css'
})
export class DepartmentManageComponent implements OnInit{
departmentList: Department[]=[];
departmentForm!: FormGroup;
searchId: any;
emp: any;


constructor(private departmentService:DepartmentManageService,private fb:FormBuilder){}
ngOnInit(): void {
  this.departmentService.getAllDepartments()
    .subscribe(data=>{
      data.forEach(element => {
        const department = new Department(
          element.id,
          element.name,
          element.description
        );
        this.departmentList.push(department);
      });
    })
    this.departmentForm = this.fb.group({
      id: [''],
      name: [''],
      address: [''],
      salary: ['']
    });
    console.log("method hi");
}

submitForm() {
  this.departmentService.saveDepartment(this.departmentForm.value).subscribe({
    next: (response) => {
      console.log('Department saved successfully:', response);
      alert("Department saved successfully");
    },
    error: (error) => {
      console.error('There was an error saving the Department:', error);
      alert("There was an error saving the Department");
    }
  });
}

onSearch(id: number): void {
  this.departmentService.getDepartmentById(id).subscribe({
    next: (department) => {
      this.departmentForm.patchValue(department); // populate form fields
    },
    error: () => {
      alert('Department not found');
    }
  });
}

onUpdate(): void {
  const updatedDepartment: Department = this.departmentForm.value;
  this.departmentService.updateDepartment(updatedDepartment).subscribe({
    next: (msg) => {
      alert(msg);
    },
    error: () => {
      alert('Update failed');
    }
  });
}

onDelete(id: number): void {
  if (confirm('Are you sure to delete this department?')) {
    this.departmentService.deleteDepartment(id).subscribe({
      next: (msg) => {
        alert(msg);
        this.departmentList = this.departmentList.filter(e => e.id !== id);
      },
      error: () => {
        alert('Delete failed');
      }
    });
  }
}

 
}
