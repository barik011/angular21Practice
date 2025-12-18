import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enquiry-master',
  imports: [FormsModule],
  templateUrl: './enquiry-master.html',
  styleUrl: './enquiry-master.css',
})
export class EnquiryMaster implements OnInit {
  http = inject(HttpClient);
  categoriesList = signal<any[]>([]);

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.http.get('https://api.freeprojectapi.com/api/Enquiry/get-categories').subscribe({
      next: (result: any) => {
        debugger;
        this.categoriesList.set(result.data);
      },
      error: (err: any) => {
        alert('Data not loaded, Please check API');
      },
    });
  }

  newCategoryObj: any = {
    categoryId: 0,
    categoryName: '',
    isActive: false,
  };
  onSaveCategory() {
    this.http
      .post('https://api.freeprojectapi.com/api/Enquiry/create-category', this.newCategoryObj)
      .subscribe({
        next: (resp: any) => {
          alert('Category Created Successfully');
          this.getCategories();
          this.onResetForm();
        },
        error: (err: any) => {
          alert('Error: Category Not Created!');
        },
      });
  }

  onUpdateCategory() {
    this.http
      .put(
        `https://api.freeprojectapi.com/api/Enquiry/update-category/${this.newCategoryObj.categoryId}`,
        this.newCategoryObj
      )
      .subscribe({
        next: (resp) => {
          alert('Category Updated');
          this.getCategories();
        },
        error: (err: any) => {
          alert('Error: Category Not Updated!');
        },
      });
  }

  onResetForm() {
    this.newCategoryObj = {
      categoryId: 0,
      categoryName: '',
      isActive: false,
    };
  }

  editRecord(item: any) {
    this.newCategoryObj = item;
  }

  deleteRecord(id: number) {
    const isDelete = confirm('Are you delete the record');
    if (isDelete) {
      this.http
        .delete(`https://api.freeprojectapi.com/api/Enquiry/delete-category/${id}`)
        .subscribe({
          next: (resp: any) => {
            alert('Recored Deleted !');
          },
          error: (err: any) => {
            alert('Record Not deleted Please check issue !');
          },
        });
    }
  }
}
