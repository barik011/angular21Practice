import { Component, inject } from '@angular/core';
import { Utility } from '../../services/utility';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-signal-ex',
  imports: [FormsModule],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
})
export class SignalEx {
  utilityServ =inject(Utility)

  firstNumber:number=0;
  secondNumber:number=0;
  thirdNumber:number=0;
  sumOfTwoNumber:number=0;
  sumOfThreeNumber:number=0;
  sumOfAnyNumber:number=0;
  sumOfAnyNumber2:number=0
  constructor(){
    
  }
  onSumOfTwo(){
    debugger;
    this.sumOfTwoNumber= this.utilityServ.sumOf2NumberServ(Number(this.firstNumber),Number(this.secondNumber));
  }
  onSumOfThree(){
    debugger;
    this.sumOfThreeNumber= this.utilityServ.sumOf3NumberServ(Number(this.firstNumber),Number(this.secondNumber),Number(this.thirdNumber));
  }
  onSumOfAnyNumber(){
    debugger;
     this.sumOfAnyNumber = this.utilityServ.sumOfNumbers(Number(this.firstNumber),Number(this.secondNumber));
  }
  onSumOfAnyNumber2(){
    debugger;
     this.sumOfAnyNumber2 = this.utilityServ.sumOfNumbers(Number(this.firstNumber),Number(this.secondNumber),Number(this.thirdNumber));
  }
 //sum3Num = this.utilityServ.sumOf3NumberServ(5,8,6);
}
