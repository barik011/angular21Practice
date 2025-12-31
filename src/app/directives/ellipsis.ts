import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEllipsis]',
})
export class Ellipsis implements OnInit {

  @Input() maxCharLimit:number = 0;

  @Input() fullAddressValue:string =''

  constructor(private eleRef:ElementRef,private render:Renderer2) {}

  ngOnInit(): void {
    debugger;
    if(this.fullAddressValue.length > this.maxCharLimit)
    {
      const shortAddressValue = this.fullAddressValue.substring(0,this.maxCharLimit)+'...';
      this.eleRef.nativeElement.innerText = shortAddressValue
      // this.render.setProperty(this.eleRef.nativeElement,'innerText',shortAddressValue);
      this.render.setAttribute(this.eleRef.nativeElement,'title',this.fullAddressValue);
    } 
    else{
      this.eleRef.nativeElement.innerText = this.fullAddressValue
    } 
  }


}
