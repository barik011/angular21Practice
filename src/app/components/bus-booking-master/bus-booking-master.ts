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

  ngOnInit(): void {
    this.getAllBusVendor();
    this.getUserList();
  }

  //*******************************************
  //         Start Bus Vendor Services
  // *******************************************
  getAllBusVendor() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusVendors').subscribe({
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
    this.http
      .post('https://api.freeprojectapi.com/api/BusBooking/PostBusVendor', this.newVendorObj)
      .subscribe({
        next: (res: any) => {
          alert('Vendor Created');
          this.onResetForm();
          this.getAllBusVendor();
        },
        error: (err: any) => {
          alert('Please Insert Proper Data');
        },
      });
  }

  editRecord(data: any) {
    this.newVendorObj = data;
  }

  onResetForm() {
    this.newVendorObj = {
      vendorId: 0,
    vendorName: '',
    contactNo: '',
    emailId: '',
    };
  }

  onUpdateVendor() {
    this.http
      .put(
        'https://api.freeprojectapi.com/api/BusBooking/PutBusVendors?id=' +
          this.newVendorObj.vendorId,
        this.newVendorObj
      )
      .subscribe({
        next: (res: any) => {
          alert('Vendor Record Updated!');
          this.getAllBusVendor();
          this.onResetForm();
        },
        error: () => {
          alert('Record Not Updated Please check!');
        },
      });
  }

  deleteRecord(id: number) {
    const idDelete = confirm('Are you sure you want to delete the record?');
    if (idDelete) {
      this.http
        .delete('https://api.freeprojectapi.com/api/BusBooking/DeleteBusVendor?id=' + id)
        .subscribe({
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
  userList=signal<any[]>([]);

newUserObj:any={
  userId: 0,
  userName: "",
  emailId: "",
  fullName: "",
  role: "",
  createdDate: new Date(),
  password: "",
  projectName: "",
  refreshToken: "",
  refreshTokenExpiryTime: new Date()
}
isOpenForm:boolean=false;
openAddUserForm(){
  this.isOpenForm=!this.isOpenForm;
}

  getUserList(){
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetAllUsers').subscribe({
      next:(result:any)=>{
        this.userList.set(result.data)
      }
    })
  }

}
