import { Component } from '@angular/core';
import { interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rx-js-basic',
  imports: [],
  templateUrl: './rx-js-basic.html',
  styleUrl: './rx-js-basic.css',
})
export class RxJsBasic {
    $obsrData = new Observable<number>(res=>{
      res.next(123);
    });

    $fullName = new Observable<string>(fullname=>{
      fullname.next('Mohammad');
    });
     

    $count= interval(5000);

    $empData =  of({empName:'Barique',empCity:'Purnea',empState:'Bihar',empMob: 9898989898})





    constructor(){
      debugger
      // this.$fullName.subscribe(fullname=>{
      //   debugger
      //   console.log(fullname);
      // })

      this.$obsrData.subscribe((no)=>{
        debugger
      })

    //   this.$count.subscribe((number)=>{
    //     debugger;
    //     console.log(number)
    // });

    this.$empData.subscribe((emp)=>{
      debugger;
      console.log(emp);
    })


    }
}
