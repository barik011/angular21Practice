import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from "@angular/common";


@Component({
  selector: 'app-ng-style-ex',
  imports: [FormsModule, NgStyle],
  templateUrl: './ng-style-ex.html',
  styleUrl: './ng-style-ex.css',
})
export class NgStyleEx {
  
  //Toggle Bg Color
  bgColor:string='';
    onSucessStyle(){
      this.bgColor = "green";
    }
    onDangerStyle(){
      this.bgColor = "red";
    }
    //Input Progress Bar
    inputNumber:number|null=null;

    //Dynamic Styling
    inputWidth:number|null = null;
    inputHeight:number|null = null;
    inputRadius:number|null = null;
    inputColor:string="";
    styleObj:any={};
    onDynamicStyle(){
      debugger;
      if(this.inputWidth!=null && this.inputHeight!=null && this.inputRadius){
        this.styleObj={
          "width":this.inputWidth+"px",
          "height":this.inputHeight+"px",
          "border-radius":this.inputRadius+"px",
          'background-color':this.inputColor
        }
        
      }
      else{
        alert('Please fill all fields');
      }
    }
}
