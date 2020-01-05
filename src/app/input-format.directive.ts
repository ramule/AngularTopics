import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;
  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    console.log('on focus');
  }

  @HostListener('blur') onBlur() {
    console.log('on Blur');
    const value: string = this.el.nativeElement.value;
    if (value === this.format) {
      this.el.nativeElement.value = value.toUpperCase();
    } else {
      this.el.nativeElement.value = value.toLowerCase();
    }
  }
}
