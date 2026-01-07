import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { empty } from 'rxjs';

@Component({
  selector: 'app-reactive-advance',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-advance.html',
  styleUrl: './reactive-advance.css',
})
export class ReactiveAdvance {


    employeeObj:FormGroup = new FormGroup({
      empName:new FormControl(''),
      emptCity:new FormControl(''),
      empState: new FormControl('')
    })


}
