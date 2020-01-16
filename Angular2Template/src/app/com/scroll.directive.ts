import {Directive, ElementRef, EventEmitter, HostListener, Output} from "@angular/core";

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  @Output() scrollChange = new EventEmitter<number>();

  constructor(private el: ElementRef) { }

  @HostListener('scroll') onScroll() {
    this.scrollChange.next(this.el.nativeElement);
  }
}