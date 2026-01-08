import { Component } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';

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

    $empData =  of({empName:'Barique',empCity:'Purnea',empState:'Bihar',empMob: 9898989898});
    $areaCode =  of(['110025','124514','5465865','5465875']);


    $cityList = from(['Purnea','katihar','Araria','Kisanganj']);





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

    this.$areaCode.subscribe((code)=>{
      debugger;
      console.log(code);
    })

    //City itterate one by one
    this.$cityList.subscribe((city)=>{
      debugger;
      console.log(city);
    })


    }
}
