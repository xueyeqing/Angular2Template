import {Component, HostBinding, OnInit} from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import {PAGE_IN_ANIMATION, PAGE_OUT_ANIMATION} from "../../../com/animation/animation-in-out";

@Component({
  selector: 'demo-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.less','../page.less'],
  // animations: [
  //   trigger('pageAnimations', [
  //     transition(':enter', useAnimation(PAGE_IN_ANIMATION)),
  //     transition(':leave', useAnimation(PAGE_OUT_ANIMATION))
  //   ]),
  // ]
})
export class Page1Component implements OnInit{

  // @HostBinding('@pageAnimations')
  // public animatePage = true;

  ngOnInit(): void {
  }

}
