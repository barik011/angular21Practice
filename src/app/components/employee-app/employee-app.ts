import { DatePipe, NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee-service';

@Component({
  selector: 'app-employee-app',
  imports: [FormsModule,NgClass],
  providers: [DatePipe],
  templateUrl: './employee-app.html',
  styleUrl: './employee-app.css',
})
export class EmployeeApp {
  employeesList = signal<any[]>([]);
  departmentsList = signal<any[]>([]);
  designationList = signal<any[]>([]);
  http = inject(HttpClient);
  baseApiUrl: string = 'https://api.freeprojectapi.com/api/EmployeeApp/';
  isOpenForm: boolean = false;

  newEmployeeObj: any = {
    employeeId: 0,
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfJoining: '',
    departmentId: '',
    designationId: '',
    employeeType: '',
    salary: '',
  };

  empSev = inject(EmployeeService);
  datePipe = inject(DatePipe);
  ngOnInit(): void {
    this.getEmployees();
    this.getDepartments();
  }
  openForm() {
    this.isOpenForm = !this.isOpenForm;
  }
  getEmployees() {
    debugger;
    // this.http.get(`${this.baseApiUrl}GetEmployees`).subscribe({
    //   next: (result: any) => {
    //     this.employeesList.set(result);
    //   },
    //   error: (err: any) => {
    //     alert('Error while fetching All Employee data');
    //   },
    // });
    this.empSev.getAllEmpListServ().subscribe({
      next: (result: any) => {
        this.employeesList.set(result);
      },
      error: (err: any) => {
        alert('Error while fetching All Employee data');
      },
    })

  }

  getDepartments() {
    // this.http.get(`${this.baseApiUrl}GetDepartments`).subscribe({
    //   next: (result: any) => {
    //     this.departmentsList.set(result);
    //   },
    //   error: (err: any) => {
    //     alert('Error while fetching Department data');
    //   },
    // });
    this.empSev.getDeptListServ().subscribe({
      next:(result:any)=>{
        this.departmentsList.set(result);
      }
    })
  }

  getDesignationByDeptId() {
    debugger;
    // this.http
    //   .get(`${this.baseApiUrl}GetDesignationsByDeptId?deptId=${this.newEmployeeObj.departmentId}`)
    //   .subscribe({
    //     next: (result: any) => {
    //       this.designationList.set(result);
    //     },
    //     error: (err: any) => {
    //       alert('Error while fetching Designation data');
    //     },
    //   });

    this.empSev.getDesgByDeptIdServ(this.newEmployeeObj.departmentId).subscribe({
        next:(result:any)=>{
          this.designationList.set(result);
        },
        error:(err:any)=>{
          alert('Designation not fatch Please check code...');
        }
    })
  }
  onSaveEmployee() {
    debugger;
    // this.http.post(`${this.baseApiUrl}CreateEmployee`, this.newEmployeeObj).subscribe({
    //   next: (result: any) => {
    //     alert('Employee Created');
    //     this.getEmployees();
    //     this.onResetForm();
    //     this.isOpenForm = false;
    //   },
    //   error: (err: any) => {
    //     alert('Error while creating employee');
    //   },
    // });

    this.empSev.saveEmployeeServ(this.newEmployeeObj).subscribe({
      next:(resp:any)=>{
        alert('Emplyee Created !');
        this.getEmployees();
        this.onResetForm();
        this.isOpenForm = false;
      },
      error:(err:any)=>{
        alert('Error while creating employee')
      }
    })


  }

  onUpdateEmployee() {
    this.http
      .put(
        `${this.baseApiUrl}UpdateEmployee?id=${this.newEmployeeObj.employeeId}`,
        this.newEmployeeObj
      )
      .subscribe({
        next: (resp: any) => {
          alert('Recored Updated');
          this.getEmployees();
          this.onResetForm();
          this.isOpenForm = false;
        },
        error: (err: any) => {
          alert('Recored Not Updated');
        },
      });
  }

  editRecord(id: number) {
    debugger;
    this.isOpenForm = true;
    this.http.get(`${this.baseApiUrl}${id}`).subscribe({
      next: (resp: any) => {
        const formatedDate = this.datePipe.transform(resp.dateOfJoining, 'dd-MM-yy')
        this.newEmployeeObj = resp;
        this.newEmployeeObj.dateOfJoining = formatedDate;
        this.getDepartments();
        this.getDesignationByDeptId();
      },
      error: (err: any) => {
        alert('Error while fetching Single Employee data');
      },
    });
  }
  deleteRecord(id: number) {
    debugger;
    const isDelete = confirm('Are you sure to delete record');
    if (isDelete) {
      this.http.delete(`${this.baseApiUrl}DeleteEmployee?id=${id}`).subscribe({
        next: (resp: any) => {
          alert('record deleted');
          this.getEmployees();
        },
        error: (err: any) => {
          alert('Record not delete please check the code or api');
        },
      });
    }
  }

  onResetForm() {
    this.newEmployeeObj = {
      employeeId: 0,
      fullName: '',
      email: '',
      phone: '',
      gender: '',
      dateOfJoining: '',
      departmentId: 0,
      designationId: 0,
      employeeType: '',
      salary: '',
    };
  }
}
