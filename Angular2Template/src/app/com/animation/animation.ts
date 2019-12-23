import {animate, group, state, style, transition, trigger} from "@angular/animations";

/**
 * 路由转场动画
 * @type {AnimationTriggerMetadata}
 */
export const slideToRightAnimation =
  trigger('routeAnimation', [
    // 定义void表示空状态下
    state('void', style({ position: 'fixed', 'width': '100%', 'height': '100%' })),
    // * 表示任何状态
    state('*', style({ position: 'fixed', 'width': '100%', 'height': '100%' })),
    // 进场动画
    transition(':enter', [
      style({ transform: 'translate3d(-100%,0,0)' }),
      animate('.5s ease-in-out', style({ transform: 'translate3d(0,0,0)' }))
    ]),
    // 出场动画
    transition(':leave', [
      style({ transform: 'translate3d(0,0,0)' }),
      animate('.5s ease-in-out', style({ transform: 'translate3d(100%,0,0)' }))
    ])
  ]);

/**
 * 淡入淡出
 * @type {AnimationTriggerMetadata}
 */
export const visibilityAnimation =
  trigger('visibilityChanged',[
    state('shown',style({opacity: 1, transform: 'scale(1.0)' })),
    state('hidden',style({opacity: 0, transform: 'scale(0.0)'})),
    transition('shown => hidden', animate('600ms')),
    transition('hidden => shown', animate('300ms')),
  ]);

/**
 *
 * @type {AnimationTriggerMetadata}
 */
export const cardAnim = trigger('card', [
  state('out', style({transform: 'scale(1)', 'box-shadow': 'none', 'background': 'deepskyblue'})),
  state('hover', style({transform: 'scale(1.1)', 'box-shadow': '3px 3px 5px #ccc', 'background': '#FF34B3'})),
  transition('out => hover', animate('100ms ease-in')),
  transition('hover => out', animate('100ms ease-out'))
]);