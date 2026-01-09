import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Utility {


  sumOf2NumberServ(num1:number,num2:number){
    debugger;
    return num1 + num2;
  }

  sumOf3NumberServ(num1:number,num2:number,num3:number){
    debugger;
    return num1 + num2 + num3;
  }

  sumOfNumbers(...rest:number[]){
    debugger;
    let sum = 0;
    for(let i=0; i < rest.length ; i++){
      sum = sum + rest[i];
    }
    return sum;
  }
}
 