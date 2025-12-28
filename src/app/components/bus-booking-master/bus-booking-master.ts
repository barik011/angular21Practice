import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bus-booking-master',
  imports: [FormsModule],
  templateUrl: './bus-booking-master.html',
  styleUrl: './bus-booking-master.css',
})
export class BusVendorMaster implements OnInit {
  busVendorList = signal<any[]>([]);
  http = inject(HttpClient);

  baseApiUrl: string = 'https://api.freeprojectapi.com/api/BusBooking/';
  ngOnInit(): void {
    this.getAllBusVendor();
    this.getUserList();
  }

  //*******************************************
  //         Start Bus Vendor Services
  // *******************************************
  getAllBusVendor() {
    this.http.get(`${this.baseApiUrl}GetBusVendors`).subscribe({
      next: (resp: any) => {
        debugger;
        this.busVendorList.set(resp);
      },
      error: (err: any) => {
        alert(err);
      },
    });
  }

  newVendorObj: any = {
    vendorId: 0,
    vendorName: '',
    contactNo: '',
    emailId: '',
  };

  onSaveVendor() {
    this.http.post(`${this.baseApiUrl}PostBusVendor`, this.newVendorObj).subscribe({
      next: (res: any) => {
        alert('Vendor Created');

        this.getAllBusVendor();
        this.onResetVendorForm();
      },
      error: (err: any) => {
        alert('Please Insert Proper Data');
      },
    });
  }

  editVendorRecord(data: any) {
    this.newVendorObj = data;
    this.newUserObj = data;
    this.isOpenForm = true;
  }

  onResetVendorForm() {
    this.newVendorObj = {
      vendorId: 0,
      vendorName: '',
      contactNo: '',
      emailId: '',
    };
  }

  onUpdateVendor() {
    this.http
      .put(`${this.baseApiUrl}PutBusVendors?id=${this.newVendorObj.vendorId}`, this.newVendorObj)
      .subscribe({
        next: (res: any) => {
          alert('Vendor Record Updated!');
          this.getAllBusVendor();
          this.onResetVendorForm();
        },
        error: () => {
          alert('Record Not Updated Please check!');
        },
      });
  }

  deleteRecord(id: number) {
    const idDelete = confirm('Are you sure you want to delete the record?');
    if (idDelete) {
      this.http.delete(`${this.baseApiUrl}DeleteBusVendor?id=${id}`).subscribe({
        next: (res: any) => {
          alert('Record Deleted');
          this.getAllBusVendor();
        },
        error: (err: any) => {
          alert('Record Not Delete some Dependency');
        },
      });
    }
  }

  //*******************************************
  //         Start User Services
  // *******************************************
  userList = signal<any[]>([]);

  newUserObj: any = {
    userId: 0,
    userName: '',
    emailId: '',
    fullName: '',
    role: '',
    createdDate: new Date(),
    password: '',
    projectName: '',
    refreshToken: '',
    refreshTokenExpiryTime: new Date(),
  };
  isOpenForm: boolean = false;
  openAddUserForm() {
    this.isOpenForm = !this.isOpenForm;
  }

  getUserList() {
    this.http.get(`${this.baseApiUrl}GetAllUsers`).subscribe({
      next: (result: any) => {
        this.userList.set(result.data);
      },
    });
  }

  onSaveUser() {
    this.http.post(`${this.baseApiUrl}AddNewUser`, this.newUserObj).subscribe({
      next: (res: any) => {
        alert('User Added');
        this.getUserList();
        this.onResetUserForm();
      },
      error: (err: any) => {
        alert('User Not Added Please Check API');
      },
    });
  }
  editUserRecord(data: any) {
    this.newUserObj = data;
    this.isOpenForm = true;
  }
  onResetUserForm() {
    this.newUserObj = {
      userId: 0,
      userName: '',
      emailId: '',
      fullName: '',
      role: '',
      createdDate: '',
      password: '',
      projectName: '',
      refreshToken: '',
      refreshTokenExpiryTime: '',
    };
  }
  onUpdateUser() {
    this.http.post(`${this.baseApiUrl}UpdateUser`, this.newUserObj).subscribe({
      next: (resp: any) => {
        alert('User Updated');
        this.getUserList();
        this.isOpenForm = false;
      },
      error: (err: any) => {
        alert('Something wrong please check code or API');
      },
    });
  }

  deleteUserRecord(id: number) {
    const isDelete = confirm('Are you sure record delete');
    if (isDelete) {
      this.http.delete(`${this.baseApiUrl}DeleteUserByUserId?userId=${id}`).subscribe({
        next: (resp: any) => {
          alert('Record Deleted');
          this.getUserList();
        },
        error: (err: any) => {
          alert('Record Not Deleted, Please check API');
        },
      });
    }
  }
}
