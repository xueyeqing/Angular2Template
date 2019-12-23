import {Component, OnInit, HostBinding, HostListener} from '@angular/core';
import {cardAnim} from "../../com/animation/animation";

@Component({
  selector: 'demo-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
  animations: [cardAnim]
})
export class ProjectItemComponent implements OnInit {

  // @HostBinding('@card') cardState = 'out';
  cardState = 'out';

  constructor() {
  }

  ngOnInit() {
  }

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
