import { Routes } from '@angular/router';
import { MainUiComponent } from './page/main-ui/main-ui.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { EmployeeManageComponent } from './page/employee-manage/employee-manage.component';
import { DepartmentManageComponent } from './page/department-manage/department-manage.component';
import { JobTitleManageComponent } from './page/job-title-manage/job-title-manage.component';

export const routes: Routes = [
    {
        path:'main-ui',
        component:MainUiComponent,
        children:[
            {
                path:'dashboard',
                component: DashboardComponent
            },
            {
                path:'employee-manage',
                component: EmployeeManageComponent
            },
            {
                path:'department-manage',
                component: DepartmentManageComponent
            },
            {
               path:'job-title-manage',
               component: JobTitleManageComponent
            }
        ]
    },
    {
        path:'',
        component:MainUiComponent
    }
];
