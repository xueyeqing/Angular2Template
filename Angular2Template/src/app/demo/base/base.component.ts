import {Component, OnDestroy, OnInit} from '@angular/core';
import {KeyboardBinding, Keys} from "../../com/service/keyboard.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

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
  animations:[
    trigger('contentAnimation', [
      transition(':enter', []),

      state(`${SECTIONS.intro}`, style({ transform: 'translateY(0px)' })),
      state(`${SECTIONS.triggers}`, style({ transform: 'translateY(-800px)' })),
      state(`${SECTIONS.component}`, style({ transform: 'translateY(-1600px)' })),
      state(`${SECTIONS.animateStyle}`, style({ transform: 'translateY(-2400px)' })),
      state(`${SECTIONS.insertionRemoval}`, style({ transform: 'translateY(-3200px)' })),
      state(`${SECTIONS.animationCallback}`, style({ transform: 'translateY(-4000px)' })),

      transition('* => *', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ])
  ]
})
export class BaseComponent implements OnInit, OnDestroy {

  section = SECTIONS.intro;
  sections = SECTIONS;
  visibleSection = SECTIONS.intro;
  private _keydownBinding: KeyboardBinding;

  constructor() { }

  ngOnInit() {
    this._keydownBinding = new KeyboardBinding([Keys.KEY_UP, Keys.KEY_DOWN], keyCode => {
      if (keyCode === Keys.KEY_UP) {
        this.up();
      } else if (keyCode === Keys.KEY_DOWN) {
        this.down();
      }
    });
  }

  ngOnDestroy() {
    this._keydownBinding.deregister();
  }

  up() {
    this.section = Math.max(this.section - 1, 1);
  }

  down() {
    this.section = Math.min(this.section + 1, Object.keys(SECTIONS).length);
  }

  isActive(value: number) {
    return value === this.section;
  }

  onInnerSectionClick(value: number) {
    if (value != this.visibleSection) {
      this.section = value;
    }
  }
}
