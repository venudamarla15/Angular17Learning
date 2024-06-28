import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlite]',
  standalone: true
})
export class HighliteDirective {

  @Input() highlightColor: string ="";
  
  constructor(private el: ElementRef) {
    console.log("Inside custom directive");
   }

   @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlightColor || "yellow");
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.highlight("");
   }

   private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
   }

}
