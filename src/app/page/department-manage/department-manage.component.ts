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

onUpdate() {
throw new Error('Method not implemented.');
}
onSearch() {
throw new Error('Method not implemented.');
}
deleteDepartment(arg0: any) {
throw new Error('Method not implemented.');
}
  
 
}
