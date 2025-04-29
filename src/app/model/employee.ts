export class Employee{
    id?: number;
    employeeCode!: string;
    name!: string;
    email!: string;
    address!: string;
    phone!: string;
    dateOfBirth!: string;
    joinDate!: string;
    gender!: 'MALE' | 'FEMALE';
    department!: string;
    jobTitle!: string;
    active!: boolean;
    updateBy?: number;
}