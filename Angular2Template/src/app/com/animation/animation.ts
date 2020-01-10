import {animate, animateChild, group, keyframes, query, state, style, transition, trigger} from "@angular/animations";

const ELASTIC_BEZIER = 'cubic-bezier(.26,1.96,.58,.61)';
const NICE_EASING = 'cubic-bezier(0.35, 0, 0.25, 1)';

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
 * 路由转场动画
 * @type {AnimationTriggerMetadata}
 */

const SHARED_ANIMATION_STYLES = [
  style({ position: 'relative', height: '!' }),
  query(':enter, :leave', [
    style({ position: 'absolute', left: 0, top: 0, width: '100%' })
  ]),
  query(':enter', style({ opacity: 0 }))
];
export const routerAnimationsLR = trigger('routerAnimationsLR',[
  transition(':enter', []),
  transition(':increment', [
    ...SHARED_ANIMATION_STYLES,
    query(':enter', [
      style({ opacity: 0, transform: 'translateX(100%)' }),
    ]),
    query(':leave', [
      animateChild(),
    ]),
    group([
      query(':leave', [
        animate('1s ' + NICE_EASING, style({ transform: 'translateX(-100%)', opacity: 0}))
      ]),
      query(':enter', [
        animate('0.5s 0.1s ' + NICE_EASING, style({ opacity: 1, transform: 'none' })),
      ]),
      query(':enter', [
        animateChild()
      ], { delay: '500ms' })
    ]),
  ]),
  transition(':decrement', [
    ...SHARED_ANIMATION_STYLES,
    query(':enter', [
      style({ opacity: 0, transform: 'translateX(-100%)' }),
    ]),
    query(':leave', [
      animateChild(),
    ]),
    group([
      query(':leave', [
        animate('1s ' + NICE_EASING, style({ transform: 'translateX(100%)', opacity: 0 }))
      ]),
      query(':enter', [
        animate('0.5s 0.1s ' + NICE_EASING, style({ opacity: 1, transform: 'none' })),
      ]),
      query(':enter', [
        animateChild()
      ], { delay: '500ms' })
    ])
  ]),
]);

export const viewAnimation = trigger('viewAnimation', []);

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
  state('out', style({transform: 'scale(1)', 'box-shadow': 'none', 'background': '#3BAFDA'})),
  state('hover', style({transform: 'scale(1.1)', 'box-shadow': '3px 3px 5px #ccc', 'background': '#FF34B3'})),
  transition('out => hover', animate('100ms ease-in')),
  transition('hover => out', animate('100ms ease-out'))
]);

/**
 * 购物车数量增加动画
 * @type {AnimationTriggerMetadata}
 */
export const countAnimation = trigger('count',[
  transition('void => current',[
    animate('400ms 150ms', keyframes([
      style({opacity: 0.6,transform:'translateY(0)',offset:0}),
      style({opacity: 0.3,transform:'translateY(-15px)',offset:0.5}),
      style({opacity: 0,transform:'translateY(-30px)',offset:1}),
    ]))
  ]),
  transition('void => last',[
    animate(250,keyframes([
      style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
      style({ opacity: 0.3, transform: 'translateY(15px)', offset: 0.5 }),
      style({ opacity: 0.8, transform: 'translateY(0)', offset: 1.0 })
    ]))
  ])
]);

/**
 * 进度 百分比加载
 * @type {AnimationTriggerMetadata}
 */
export const loadingAnimation = trigger('loadingAnimation', [
  transition(':enter', [
    query('.text', [
      style({ marginTop: '-200px' }),
      animate('1500ms ' + ELASTIC_BEZIER, style({ marginTop: '0px' }))
    ])
  ]),
  transition(':leave', [
    query('.text', [
      animate('800ms ease-out', style({ opacity: '0' }))
    ]),
    animate('300ms', style({ opacity: 0 }))
  ])
]);