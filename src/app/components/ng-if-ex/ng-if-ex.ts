import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if-ex',
  imports: [FormsModule, NgIf,NgFor],
  templateUrl: './ng-if-ex.html',
  styleUrl: './ng-if-ex.css',
})
export class NgIfEx {
    genderVal:string='';
  product:string='';
  isActive:boolean=true;
  isShow:boolean=true;
  isValid:boolean=true;
  inputFirst:string='';
  inputSecond:string='';
  firstName:string='';
  lastName:string='';
   onAddProduct(category:string){
    if(category=='Mobile'){
      this.product ='Samsumg, Sony, Motorola, Micromax';
    }
    else if(category=='Laptop'){
      this.product = 'Sony, Lenovo, Hp, Acer';
    }
    else if(category=='Camera'){
      this.product = 'Sony, Philips ';
    }
    else{
      this.product = 'Please select proper category';
    }

  }

  onShow(){
    this.isActive = true;
  }
  
  onHide(){
    this.isActive = false;
  }
  onShowHide(){
    this.isShow = !this.isShow;
  }

  onCheckInput(){
    if(this.inputFirst===this.inputSecond){
      this.isValid = true;
    }
    else{
      this.isValid = false;
    }
  }

  student:any[]=[
    { name:'Barique', age:40, attendance:40, gender:'m', isIndian:true},
  { name:'Tarique', age:44, attendance:50, gender:'m', isIndian:true},
  { name:'Rita', age:32, attendance:60, gender:'f', isIndian:false},
  { name:'Gorge', age:30, attendance:30, gender:'m', isIndian:false},
  ]
}
