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

    constructor(
        id: number,
        employeeCode: string,
        name: string,
        email: string,
        address: string,
        phone: string,
        dateOfBirth: string,
        joinDate: string,
        gender: 'MALE' | 'FEMALE',
        department: string,
        jobTitle: string,
        active: boolean,
        updateBy: number
      ) {
        this.id = id;
        this.employeeCode = employeeCode;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.dateOfBirth = dateOfBirth;
        this.joinDate = joinDate;
        this.gender = gender;
        this.department = department;
        this.jobTitle = jobTitle;
        this.active = active;
        this.updateBy = updateBy;
      }
}