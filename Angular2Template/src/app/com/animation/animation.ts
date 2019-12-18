import {animate, state, style, transition, trigger} from "@angular/animations";

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
    // state('*', style({opacity: 1, transform: 'translateX(0)'})),
    // transition(':enter', [style({opacity: 0, transform: 'translateX(-100%)'}), animate('0.4s ease-in')]),
    // transition(':leave', [animate('0.6s ease-out', style({opacity: 0, transform: 'translateY(100%)'}))
    // ])
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