import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tabs } from "../../reusableComponents/tabs/tabs";

@Component({
  selector: 'app-fees-tracking',
  imports: [FormsModule, Tabs],
  templateUrl: './fees-tracking.html',
  styleUrl: './fees-tracking.css',
})
export class FeesTracking implements OnInit {
  batchList = signal<any[]>([]);
  http = inject(HttpClient);
  tabName:string[]=['Emplyee List','Add New Emplyee'];
  activeTabName:string= this.tabName[0];
  ngOnInit(): void {
    this.getBatches();
  }
  newBatchObj: any = {
    batchId: 0,
    batchName: '',
    createdDate: new Date(),
  };
  isOpenForm: boolean = false;
  openForm() {
    this.isOpenForm = !this.isOpenForm;
  }

  getBatches() {
    this.http.get('https://api.freeprojectapi.com/api/FeesTracking/batches').subscribe({
      next: (result: any) => {
        this.batchList.set(result);
      },
    });
  }

  onSaveBatch() {
    this.http
      .post('https://api.freeprojectapi.com/api/FeesTracking/batches', this.newBatchObj)
      .subscribe({
        next: (result: any) => {
          alert('Batch Created');
          this.getBatches();
          this.onResetForm();
        },
        error: (err: any) => {
          alert('Batch Not Created Please Check!');
        },
      });
  }

  editRecord(item: any) {
    this.activeTabName = this.tabName[1];
    // this.isOpenForm = true;
    this.newBatchObj = item;
  }
  onUpdateBatch() {
    this.http
      .put(
        `https://api.freeprojectapi.com/api/FeesTracking/batches/${this.newBatchObj.batchId}`,
        this.newBatchObj
      )
      .subscribe({
        next: (result: any) => {
          alert('Batch Updated');
          this.getBatches();
        },
        error: (err: any) => {
          alert('Batch Not Updated Please Check!');
        },
      });
  }
  deleteRecord(id: number) {
    const isDelete = confirm('Are you sure to delete the record');
    if (isDelete) {
      this.http.delete(`https://api.freeprojectapi.com/api/FeesTracking/batches/${id}`).subscribe({
        next: (result: any) => {
          alert('Batch Deleted');
          this.getBatches();
        },
        error: (err: any) => {
          alert('Batch Not Delete!');
        },
      });
    }
  }

  onResetForm() {
    this.newBatchObj = {
      batchId: 0,
      batchName: '',
      createdDate: new Date(),
    };
  }


  getCurrentTab(currtabName:string){
    this.activeTabName = currtabName;
  }
}
