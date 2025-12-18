import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-api-ex',
  imports: [],
  templateUrl: './api-ex.html',
  styleUrl: './api-ex.css',
})
export class ApiEx {
    busVendorList=signal<any[]>([]);

    http= inject(HttpClient);


    getBusVendor(){
      this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusVendors').subscribe({
        next:(resp:any)=>{
          this.busVendorList.set(resp);
        }
      })

    }
    clientList=signal<any[]>([]);
    getAllClients(){
      this.http.get('https://api.freeprojectapi.com/api/SmartParking/GetAllClients').subscribe({
        next:(resp:any)=>{
          this.clientList.set(resp.data)
        }
      })
    }
}
