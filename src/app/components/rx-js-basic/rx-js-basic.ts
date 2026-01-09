import { Component } from '@angular/core';
import { BehaviorSubject, from, interval, Observable, of, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-rx-js-basic',
  imports: [],
  templateUrl: './rx-js-basic.html',
  styleUrl: './rx-js-basic.css',
})
export class RxJsBasic {

    //Uni Cast (Cold Observable) Observable
    $obsrData = new Observable<number>(res=>{
      res.next(123);
      res.next(456);
      res.next(789);
      res.next(111213);
    });
    $fullName = new Observable<string>(fullname=>{
      fullname.next('Mohammad');
    });
    $count= interval(5000);
    $empData =  of({empName:'Barique',empCity:'Purnea',empState:'Bihar',empMob: 9898989898});
    $areaCode =  of(['110025','124514','5465865','5465875']);
    $cityList = from(['Purnea','katihar','Araria','Kisanganj']);


    //Multi Cast (Hot Observable)

    $loggedUserNameSub:Subject<string>= new Subject<string>;

    $loggedUserRole:BehaviorSubject<string> = new BehaviorSubject<string>("Admin");

    $loggedUserMultiRoleReplySub: ReplaySubject<string[]>=new ReplaySubject<string[]>


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

    // this.$empData.subscribe((emp)=>{
    //   debugger;
    //   console.log(emp);
    // })

    // this.$areaCode.subscribe((code)=>{
    //   debugger;
    //   console.log(code);
    // })

    //City itterate one by one
    // this.$cityList.subscribe((city)=>{
    //   debugger;
    //   console.log(city);
    // })
    let finalValue
    this.$loggedUserNameSub.subscribe((res)=>{
      debugger;
      finalValue= res;
    })

    this.$loggedUserNameSub.next('Barique');
    this.$loggedUserNameSub.next('Chandni');
    this.$loggedUserNameSub.next('Saad');
    this.$loggedUserNameSub.next('Adeen');

    console.log(finalValue)

    this.$loggedUserRole.subscribe((res)=>{
      debugger;
    })

    this.$loggedUserRole.next('Super Admin');

    let multipleRole;
    this.$loggedUserMultiRoleReplySub.subscribe((multiRole)=>{
      debugger;
      multipleRole = multiRole;
    })

    this.$loggedUserMultiRoleReplySub.next(['Admin','Super Admin']);

    }
}
