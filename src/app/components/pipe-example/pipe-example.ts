import { DatePipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Tabs } from "../../reusableComponents/tabs/tabs";

@Component({
  selector: 'app-pipe-example',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    SlicePipe,
    Tabs
],
  templateUrl: './pipe-example.html',
  styleUrl: './pipe-example.css',
})
export class PipeExample {

  tabName:string[]=['Title','Date','Slice'];

  customtitle: string = 'This Can you help translate this site into a foreign language';

  customDate = new Date();

  rollNo:number[] = [11,111,22,54,65,324,21,115,800,900,500,5456];
 
  selectedTabName:string=this.tabName[0];

getCurrentTab(currtabName:string){
  this.selectedTabName = currtabName;
}


}
