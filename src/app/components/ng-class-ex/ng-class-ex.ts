import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class-ex',
  imports: [NgClass,FormsModule],
  templateUrl: './ng-class-ex.html',
  styleUrl: './ng-class-ex.css',
})
export class NgClassEx {
  box1:string = 'bg-success'

  isActive!:boolean;
  isBackground:boolean=false;
  onToggleClass(){
    this.isActive=!this.isActive;
  }
  onSuccess(){
    this.isBackground=true;
  }
  onDanger(){
    this.isBackground=false;
  }

  languageList:string[]=['HTML','CSS','JavaScript','React','Angular'];
  selectedLang:string='';
  onChangeBg(lang:string){
    debugger;
    this.selectedLang = lang;
  }

isShow:boolean=true;
onSidePanel(){
this.isShow=true;
}
onClosePanel(){
this.isShow=false;
}

students:any[]=[
  {studId:1,name:'Mohan',isActive:true,gender:'m',state:'bihar'},
  {studId:2,name:'Rita',isActive:false,gender:'f',state:'UP'},
  {studId:3,name:'Sohan',isActive:true,gender:'m',state:'Delhi'},
  {studId:4,name:'Geeta',isActive:true,gender:'f',state:'Banglore'},
  {studId:5,name:'Gorge',isActive:false,gender:'m',state:'Hydrabad'},
]
selectedId!:number;
onSelectRow(id:number){
  debugger;
  this.selectedId = id;
}


}
