import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = ''
  @Input() defaultColor = ''

  constructor(private element: ElementRef)
  {
    this.element.nativeElement.style.backgroundColor = 'yellow'
  }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.highLight(this.appHighlight || this.defaultColor || 'blue')
  }
  @HostListener('mouseleave') OnMouseLeave()
  {
    this.highLight('transparent')
  }
  highLight(colore: string)
  {
    this.element.nativeElement.style.backgroundColor = colore
  }
}
