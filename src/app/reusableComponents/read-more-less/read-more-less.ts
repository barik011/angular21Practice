import { SlicePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-read-more-less',
  imports: [SlicePipe,NaPipe],
  templateUrl: './read-more-less.html',
  styleUrl: './read-more-less.css',
})
export class ReadMoreLess {
  @Input() inputText:string='';
  @Input() textLimit:number=10;
  isShowMoreLess:boolean=true;

  onToggleMoreLess(){
    this.isShowMoreLess = !this.isShowMoreLess;
  }
}
