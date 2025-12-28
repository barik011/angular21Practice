import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {

  constructor(private eRef:ElementRef) {
    
  }

  @HostListener('mouseenter')
  mouseHover(){
    this.eRef.nativeElement.style.color = 'red';
  }

  @HostListener('mouseleave')
  mouseLeft(){
    this.eRef.nativeElement.style.color = 'black';
  }
}
