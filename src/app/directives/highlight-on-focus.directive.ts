import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone:true
})
export class HighlightOnFocusDirective {
  @Input('appHighlightOnFocus') focusColor: string = 'lightgreen';

  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    this.highlight(this.focusColor);
  }

  @HostListener('blur') onBlur() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
