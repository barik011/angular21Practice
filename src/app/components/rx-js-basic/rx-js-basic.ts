import { Component } from '@angular/core';
import { Observable } from 'rxjs';

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
     
    constructor(){
      debugger
      this.$fullName.subscribe(fullname=>{
        debugger
        console.log(fullname);
      })

      this.$obsrData.subscribe((no)=>{
        debugger
      })
    }
}
