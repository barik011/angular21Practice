import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee-react-app',
  imports: [ReactiveFormsModule],
  templateUrl: './employee-react-app.html',
  styleUrl: './employee-react-app.css',
})
export class EmployeeReactApp {
  employeesList = signal<any[]>([]);
  departmentsList = signal<any[]>([]);
  designationList = signal<any[]>([]);

  baseApiUrl:string = 'https://api.freeprojectapi.com/api/EmployeeApp/'

  http = inject(HttpClient);

  isOpenForm: boolean = false;

  employeeForm: FormGroup = new FormGroup({
    employeeId: new FormControl(0),
    fullName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.pattern('^[^@]+@[^@]+\.[^@]+$')]),
    phone: new FormControl('',[Validators.required,Validators.pattern('^\d{10}$')]),
    gender: new FormControl('',[Validators.required]),
    dateOfJoining: new FormControl('',[Validators.required]),
    departmentId: new FormControl(0,[Validators.required]),
    designationId: new FormControl(0,[Validators.required]),
    employeeType: new FormControl('',[Validators.required]),
    salary: new FormControl('',[Validators.required]),
  });

  openForm() {
    this.isOpenForm = !this.isOpenForm;
  }
  ngOnInit(): void {
    this.getEmployees();
    this.getDepartments();
  }
  getEmployees() {
    this.http.get(`${this.baseApiUrl}GetEmployees`).subscribe({
      next: (result: any) => {
        this.employeesList.set(result);
      },
      error: (err: any) => {
        alert('Error while fetching All Employee data');
      },
    });
  }

  getDepartments() {
    debugger;

    this.http.get(`${this.baseApiUrl}GetDepartments`).subscribe({
      next: (result: any) => {
        this.departmentsList.set(result);
      },
      error: (err: any) => {
        alert('Error while fetching Department data');
      },
    });
  }

  getDesignationByDeptId() {
    debugger;
    const deptId = this.employeeForm.controls['departmentId'].value;
    this.http
      .get(`${this.baseApiUrl}GetDesignationsByDeptId?deptId=${deptId}`)
      .subscribe({
        next: (result: any) => {
          this.designationList.set(result);
        },
        error: (err: any) => {
          alert('Error while fetching Designation data');
        },
      });
  }

  onSaveEmployee() {
    debugger;
    const employeeFormValue = this.employeeForm.value;
    this.http
      .post(`${this.baseApiUrl}CreateEmployee`,employeeFormValue)
      .subscribe({
        next: (result: any) => {
          alert('Employee Created');
          this.getEmployees();
          this.onResetForm();
        },
        error: (err: any) => {
          alert('Error while creating employee');
        },
      });
  }
  editRecord(id: number) {
    this.isOpenForm = true;
    this.http.get(`${this.baseApiUrl}${id}`).subscribe({
      next:(result:any)=>{
        this.employeeForm = new FormGroup({
          employeeId: new FormControl(result.employeeId),
          fullName: new FormControl(result.fullName),
          email: new FormControl(result.email),
          phone: new FormControl(result.phone),
          gender: new FormControl(result.gender),
          dateOfJoining: new FormControl(result.dateOfJoining,[Validators.required]),
          departmentId: new FormControl(result.departmentId),
          designationId: new FormControl(result.designationId),
          employeeType: new FormControl(result.employeeType),
          salary: new FormControl(result.salary)
        });
        this.getDesignationByDeptId();
      }
    })
    
  }
  onUpdateEmployee() {

    this.http
      .put(`${this.baseApiUrl}UpdateEmployee?id=+${this.employeeForm.controls['employeeId'].value}`, this.employeeForm.value)
      .subscribe({
        next: (result: any) => {
          alert('Employee Updated');
          this.getEmployees();
          this.onResetForm();
        },
        error: (err: any) => {
          alert('Error while Updated employee');
        },
      });
  }
  deleteRecord(id: number) {
        debugger;
    const isDelete = confirm('Are you sure to delete this record?');
    if(isDelete){
      this.http.delete(`${this.baseApiUrl}DeleteEmployee?id=${id}`).subscribe({
        next:(resp:any)=>{
            alert('Record deleted');
            this.getEmployees();
        },
        error:(err:any)=>{
          alert('Record not delete some server issue');
        }
      })
    }
  }

  onResetForm() {
    this.employeeForm = new FormGroup({
    employeeId: new FormControl(0),
    fullName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
    dateOfJoining: new FormControl(''),
    departmentId: new FormControl(0),
    designationId: new FormControl(0),
    employeeType: new FormControl(''),
    salary: new FormControl(''),
  });
  }
}
