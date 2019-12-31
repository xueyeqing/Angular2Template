import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {KeyboardBinding, Keys} from "../../com/service/keyboard.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {fromEvent} from "rxjs/internal/observable/fromEvent";
import {debounceTime} from "rxjs/operators";

const SECTIONS = {
  intro: 1,
  triggers: 2,
  component: 3,
  animateStyle: 4,
  insertionRemoval: 5,
  animationCallback: 6
};

@Component({
  selector: 'com-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.less'],
  animations: [
    trigger('contentAnimation', [
      transition(':enter', []),

      state(`${SECTIONS.intro}`, style({transform: 'translateY(0px)'})),
      state(`${SECTIONS.triggers}`, style({transform: 'translateY(-800px)'})),
      state(`${SECTIONS.component}`, style({transform: 'translateY(-1600px)'})),
      state(`${SECTIONS.animateStyle}`, style({transform: 'translateY(-2400px)'})),
      state(`${SECTIONS.insertionRemoval}`, style({transform: 'translateY(-3200px)'})),
      state(`${SECTIONS.animationCallback}`, style({transform: 'translateY(-4000px)'})),

      transition('* => *', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ])
  ]
})
export class BaseComponent implements OnInit, OnDestroy, AfterViewInit {

  section = SECTIONS.intro;
  visibleSection = SECTIONS.intro;
  sections = SECTIONS;
  private _keydownBinding: KeyboardBinding;

  subscribeScroll: any;
  NUM: number = 0;

  constructor(/*private cd: ChangeDetectorRef*/) {
  }

  ngOnInit() {
    this._keydownBinding = new KeyboardBinding([Keys.KEY_UP, Keys.KEY_DOWN], keyCode => {
      if (keyCode === Keys.KEY_UP) {
        this.up();
      } else if (keyCode === Keys.KEY_DOWN) {
        this.down();
      }
    });

    // 监听鼠标滚动
    this.subscribeScroll = fromEvent(window, 'mousewheel')
      .pipe(
        debounceTime(100)
      ).subscribe((event) => {
        this.WindowScroll();
      });
  }

  ngAfterViewInit() {

  }

  // 在组件生命周期销毁里取消事件，防止出现页面多次执行之后卡顿
  ngOnDestroy() {
    this._keydownBinding.deregister();
    this.subscribeScroll.unsubscribe();
  }

  WindowScroll() {
    //  在这里写入自己的逻辑
    var self = this;
    let scrollFunc = function (e) {
      e = e || window.event;
      if (e.wheelDelta) { //IE/Opera/Chrome
        var a = e.wheelDelta;
        self.onWheel(a,self);
      } else if (e.detail) { //Firefox
        var a = e.detail;//向上为-3，向下为3
        self.onWheel(a,self);
      }
    };
    /*注册事件*/
    if (document.addEventListener) {
      document.addEventListener('mousewheel', scrollFunc, false);
    }
    // window.onmousewheel = document.onmousewheel = scrollFunc;
  }

  up() {
    this.section = Math.max(this.section - 1, 1);
    this.NUM = 0;
    // ================变更检测
    // if (!this.cd['destroyed']) {
    //   this.cd.detectChanges();
    // }
  }

  down() {
    this.section = Math.min(this.section + 1, Object.keys(SECTIONS).length);
    this.NUM = 0;
    // if (!this.cd['destroyed']) {
    //   this.cd.detectChanges();
    // }
  }

  isActive(value: number) {
    return value === this.section;
  }

  onWheel(a,self) {
    if (a > 0) {//向上
      self.NUM--;
      if (self.NUM == Math.max(self.NUM,-1)) {
        setTimeout(()=>{
          self.up();
        },300)
      }
    }
    if (a < 0) {//向下
      self.NUM++;
      if (self.NUM == Math.min(self.NUM,1)) {
        setTimeout(()=>{
          self.down();
        },300)
      }
    }
  }
}
