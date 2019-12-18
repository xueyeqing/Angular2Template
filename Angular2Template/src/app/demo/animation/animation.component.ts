import {Component, HostBinding, OnInit} from '@angular/core';

import {slideToRightAnimation, visibilityAnimation} from '../../com/animation/animation';  //引入滑动页面的效果

@Component({
  selector: 'demo-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.less'],
  animations: [ slideToRightAnimation,visibilityAnimation ]
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

}
