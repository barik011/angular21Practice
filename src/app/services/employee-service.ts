import { HttpClient } from '@angular/common/http';
import {  inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employeeApiUrl: string = 'https://api.freeprojectapi.com/api/EmployeeApp/';

  http = inject(HttpClient);

  getAllEmpListServ(){
    debugger;
      return this.http.get(`${this.employeeApiUrl}GetEmployees`);
  }

  getDeptListServ(){
    return this.http.get(`${this.employeeApiUrl}GetDepartments`);
  }

  getDesgByDeptIdServ(id:number){
    return this.http.get(`${this.employeeApiUrl}GetDesignationsByDeptId?deptId=${id}`);
  }

  saveEmployeeServ(obj:any){
    return this.http.post(`${this.employeeApiUrl}CreateEmployee`,obj);
  }
}
