import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-app',
  imports: [FormsModule, DatePipe],
  templateUrl: './employee-app.html',
  styleUrl: './employee-app.css',
})
export class EmployeeApp {
  employeesList = signal<any[]>([]);
  departmentsList = signal<any[]>([]);
  designationList = signal<any[]>([]);
  http = inject(HttpClient);

  isOpenForm: boolean = false;
  openForm() {
    this.isOpenForm = !this.isOpenForm;
  }
  newEmployeeObj: any = {
    employeeId: 0,
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfJoining: '',
    departmentId: 0,
    designationId: 0,
    employeeType: '',
    salary: 0,
  };
  ngOnInit(): void {
    this.getEmployees();
    this.getDepartments();
  }
  getEmployees() {
    this.http.get('https://api.freeprojectapi.com/api/EmployeeApp/GetEmployees').subscribe({
      next: (result: any) => {
        this.employeesList.set(result);
      },
    });
  }

  getDepartments() {
    this.http.get('https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments').subscribe({
      next: (result: any) => {
        this.departmentsList.set(result);
      },
    });
  }

  getDesignationByDeptId(){
    this.http.get('https://api.freeprojectapi.com/api/EmployeeApp/GetDesignationsByDeptId?deptId='+this.newEmployeeObj.departmentId).subscribe({
      next: (result: any) => {
        this.designationList.set(result);
      },
    });

  }
onSaveEmployee() {
    this.http.get('https://api.freeprojectapi.com/api/EmployeeApp/CreateEmployee',this.newEmployeeObj).subscribe({
      next: (result: any) => {
        this.employeesList.set(result);
      },
    });
  }






  editRecord(item: any) {
    this.newEmployeeObj = item;

    // this.departmentsList().map(dept => {
    //   if (item.departmentName == dept.departmentName) {
    //     this.newEmployeeObj.departmentId = dept.departmentId
    //   }
    // });
    // this.designationList().map(designation => {
    //   if (item.designationName == designation.designationName) {
    //     this.newEmployeeObj.designationId = designation.designationId
    //   }
    // });
    debugger;
    
  }
  deleteRecord(id: number) {}
}
