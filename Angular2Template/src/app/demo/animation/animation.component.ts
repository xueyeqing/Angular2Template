import {Component, HostBinding, HostListener, OnInit} from '@angular/core';

import {slideToRightAnimation, cardAnim, visibilityAnimation} from '../../com/animation/animation';  //引入滑动页面的效果

@Component({
  selector: 'demo-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.less'],
  animations: [ slideToRightAnimation,visibilityAnimation,cardAnim ]
})
export class AnimationComponent implements OnInit {

  // 添加@HostBinding属性添加到类中以设置这个路由组件元素的动画和样式
  @HostBinding('@routeAnimation') routeAnimation = true;

  visibility = 'shown';
  isVisible : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  changeAnimation() {
    this.isVisible = !this.isVisible;
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  cardState = 'out';
  // HostListener 是属性装饰器，用来为宿主元素添加事件监听。
  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(target) {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }

}
