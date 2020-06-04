import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

// 'normal'表示处于正常状态，'follow'表示处于跟着页面滚动固定位置状态，'stay'表示横向滚动时候的跟随固定状态,
// 'remain'表示被容器托起处于容器底部跟着容器走的状态
export type StickyStatus = 'normal' | 'follow' | 'stay' | 'remain';

@Component({
  selector: 'com-sticky',
  templateUrl: './sticky.component.html'
})
export class StickyComponent implements OnInit {

  @Input() zIndex: number;
  @Input() container: Element; // 默认值父容器
  @Input() view: {
    top?: number,
    bottom?: number,
  };

  @Input() scrollTarget;
  parentNode; // 当前sticky的父元素

  @Output() statusChange: EventEmitter<StickyStatus> = new EventEmitter();
  @ViewChild('stickyWrapper', { static: true }) wrapper: any;

  _prevStatus: StickyStatus = undefined;
  _status: StickyStatus = 'normal';
  set status(status: StickyStatus) {
    console.log("---------set status-------",status,this._status)
    if (status !== this._status) {
      this._prevStatus = this._status;
      this._status = status;
      this.statusProcess(this._status);
    }
  }
  get status() {
    return this._status;
  }

  private THROTTLE_DELAY = 16;
  private THROTTLE_TRIGGER = 100;
  private scrollPreStart;
  private scrollTimer;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.parentNode = this.el.nativeElement.parentNode;
    console.log(this.parentNode)
    if (!this.container) {
      this.container = this.parentNode;
    }
  }

  ngAfterViewInit() {
    this.scrollTarget = this.scrollTarget || window; // window有scroll事件，document.documentElement没有scroll事件
    this.scrollTarget.addEventListener('scroll', this.throttle);
    this.initScrollStatus(this.scrollTarget);
  }

  ngOnDestroy() {
    this.scrollTarget.removeEventListener('scroll', this.throttle);
  }

  @HostListener('window:resize') 
  throttle = () => {
    const fn = this.scrollAndResizeHock;
    const time = Date.now();
    if (this.scrollTimer) {
      clearTimeout(this.scrollTimer);
    }
    if (!this.scrollPreStart) {
      this.scrollPreStart = time;
    }
    if (time - this.scrollPreStart > this.THROTTLE_TRIGGER) {
      fn();
      this.scrollPreStart = null;
      this.scrollTimer = null;
    } else {
      this.scrollTimer = setTimeout(() => {
        fn();
        this.scrollPreStart = null;
        this.scrollTimer = null;
      }, this.THROTTLE_DELAY);
    }
  }

  scrollAndResizeHock = () => {
    this.scrollHandler();
  }

  scrollHandler = () => {
    const computedStyle = window.getComputedStyle(this.container);

    console.log(this.parentNode.getBoundingClientRect().top,this.container.getBoundingClientRect().top);

    if (this.parentNode.getBoundingClientRect().top > (this.view && this.view.top || 0)) {
      this.status = 'normal';   // 全局滑动（container!==parentNode）时候增加预判
    } else if (this.container.getBoundingClientRect().top
      + parseInt(computedStyle.paddingTop, 10)
      + parseInt(computedStyle.borderTopWidth, 10)
      >= (this.view && this.view.top || 0)) {
      this.status = 'normal';
    } else if (this.container.getBoundingClientRect().bottom
      - parseInt(computedStyle.paddingBottom, 10)
      - parseInt(computedStyle.borderBottomWidth, 10)
      - this.wrapper.nativeElement.getBoundingClientRect().height
      < (this.view && this.view.top || 0) + (this.view && this.view.bottom || 0)
    ) {
      this.status = 'remain';
    } else if ((this.container.getBoundingClientRect().top + parseInt(computedStyle.paddingTop, 10) < (this.view && this.view.top || 0))
    ) {
      this.status = 'follow';
    }
  }

  statusProcess(status) {
    switch (status) {
      case 'normal':
        this.wrapper.nativeElement.style.top = 'auto';
        this.wrapper.nativeElement.style.left = 'auto';
        this.wrapper.nativeElement.style.position = 'static';
        break;
      case 'follow':
        this.wrapper.nativeElement.style.top = (this.view && this.view.top || 0) + 'px';
        this.wrapper.nativeElement.style.left = this.wrapper.nativeElement.getBoundingClientRect().left + 'px';
        this.wrapper.nativeElement.style.position = 'fixed';
        break;
      case 'stay':
        this.wrapper.nativeElement.style.top =
          this.calculateRelativePosition(this.wrapper.nativeElement, this.parentNode, 'top') + 'px';
        this.wrapper.nativeElement.style.left = 'auto';
        this.wrapper.nativeElement.style.position = 'relative';
        break;
      case 'remain':
        if (this.wrapper.nativeElement.style.position !== 'fixed' || this.wrapper.nativeElement.style.position !== 'absolute') {
          this.wrapper.nativeElement.style.top =
            this.calculateRelativePosition(this.wrapper.nativeElement, this.parentNode, 'top') + 'px';
          this.wrapper.nativeElement.style.left = 'auto';
          this.wrapper.nativeElement.style.position = 'absolute'; // 要先转为absolute再计算，否则如果处于非fixed影响计算
        }
        this.wrapper.nativeElement.style.top =
          this.calculateRemainPosition(this.wrapper.nativeElement, this.parentNode, this.container) + 'px';
        this.wrapper.nativeElement.style.left =
          this.calculateRelativePosition(this.wrapper.nativeElement, this.parentNode, 'left') + 'px';
        this.wrapper.nativeElement.style.position = 'relative';
        break;
      default:
        break;
    }
  }

  calculateRelativePosition(element, relativeElement, direction) {
    const key = {
      'left': ['left', 'Left'],
      'top': ['top', 'Top']
    };
    if (window && window.getComputedStyle) {
      const computedStyle = window.getComputedStyle(relativeElement);
      return element.getBoundingClientRect()[key[direction][0]]
        - relativeElement.getBoundingClientRect()[key[direction][0]]
        - parseInt(computedStyle['padding' + key[direction][1]], 10)
        - parseInt(computedStyle['border' + key[direction][1] + 'Width'], 10);
    }
  }
  calculateRemainPosition(element, relativeElement, container) {
    if (window && window.getComputedStyle) {
      const computedStyle = window.getComputedStyle(container);
      const result = container.getBoundingClientRect().height
        - element.getBoundingClientRect().height
        + container.getBoundingClientRect().top
        - relativeElement.getBoundingClientRect().top
        - parseInt(computedStyle['paddingTop'], 10)
        - parseInt(computedStyle['borderTopWidth'], 10)
        - parseInt(computedStyle['paddingBottom'], 10)
        - parseInt(computedStyle['borderBottomWidth'], 10);
      return result < 0 ? 0 : result;
    }
  }

  initScrollStatus(target) {
    const scrollTargets = target === window ? [document.documentElement, document.body] : [target];
    let flag = false;
    scrollTargets.forEach(scrollTarget => {
      if (scrollTarget.scrollTop && scrollTarget.scrollTop > 0) {
        flag = true;
      }
    });
    if (flag) {
      setTimeout(this.scrollHandler);
    }
  }

}
