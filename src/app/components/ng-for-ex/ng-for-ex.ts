import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from "../../directives/highlight";
import { Ellipsis } from "../../directives/ellipsis";
import { ReadMoreLess } from "../../reusableComponents/read-more-less/read-more-less";

@Component({
  selector: 'app-ng-for-ex',
  imports: [FormsModule, NgClass, Highlight, Ellipsis, ReadMoreLess],
  templateUrl: './ng-for-ex.html',
  styleUrl: './ng-for-ex.css',
})
export class NgForEx {
    newCity:string='';
    cityList:string[]=[];
    onAddCity(){
      debugger;
      var existCity = this.cityList.find((item)=> item==this.newCity)
      if(existCity==undefined){
        this.cityList.push(this.newCity);
        this.newCity='';
      }
      else{
         alert('City already present');
      }
      
    }
    selectedItem:string='';
    languageList:string[]=['HTML','CSS','JavaScript','React','Angular'];
    onAddBgColor(name:string){
      this.selectedItem=name;
    }

    tableNo!:number;
    tableArray:string[]=[];
    onCreateTable(){
      if(this.tableNo!=null){
        for(var i=1;i<=10;i++){
          var printVal= this.tableNo+'*'+i+'='+this.tableNo * i;
          this.tableArray.push(printVal)
          }
      }
      else{
        alert('Please enter Number');
      }
      
    }

    objArray:any[]=[
      {text:'ngIf',url:'https://voidchetan.github.io/voidchetan/angular/ngIf.html'},
      {text:'ngFor',url:'https://voidchetan.github.io/voidchetan/angular/ngfor.html'},
      {text:'ngClass',url:'https://voidchetan.github.io/voidchetan/angular/ngclass.html'},
      {text:'ngStyle',url:'https://voidchetan.github.io/voidchetan/angular/ngStyle.html'},
      {text:'ngForm',url:'https://voidchetan.github.io/voidchetan/angular/forms.html'}
    ];


    citiesList:string[]=['Purnea','Araria','Katihar','Kisanganj','Bhagalpur',''];
    stateList:string[]=['Bihar','UP','Delhi','MP','UK','Goa'];
    selectedCityId!:number;
    selectedStateId!:number;

    studentList:any=[
      {name:'AAA', address:'Can you help translate this site into a foreign language', surname:'', middleName:'BABA', city:'Purnea',state:''},
      {name:'BBBB', address:'Can you help translate this site into a foreign language translate this site into a foreign language', surname:'', middleName:'BABA', city:'',state:'bihar'},
      {name:'', address:'Can you help translate this site into a foreign language', surname:'ABAB', middleName:'BABA', city:'Purnea',state:''},
      {name:'DDDDD', address:'Can you help translate this site into a foreign translate this site into a foreign language language translate this site into a foreign language', surname:'ABAB', middleName:'BABA', city:'Purnea',state:'bihar'},
      {name:'EEEEEEEE', address:'Can you help translate this site into a foreign language translate this site into a foreign language', surname:'ABAB', middleName:'BABA', city:'Purnea',state:'bihar'},
      {name:'', address:'', surname:'', middleName:'BABA', city:'',state:'bihar'}
    ]
    
}
