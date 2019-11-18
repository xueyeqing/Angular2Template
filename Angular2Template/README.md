## 1、监听组件外部的点击事件
 > ### app => com=> click-outside.directive.ts
  ```
  使用 在com-module.ts中引入ClickOutsideDirective 
  <div (appClickOutside)="clickOutsideEvent()">
    元素外点击会触发
  </div>
  ```
  
## 实例：  
- http://localhost:8888/Template/demo/button  