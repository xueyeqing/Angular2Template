## 1、监听组件外部的点击事件
 > ### app => com => click-outside.directive.ts
  ```
  使用 在com-module.ts中引入ClickOutsideDirective 
  <div (appClickOutside)="clickOutsideEvent()">
    元素外点击会触发
  </div>
  ```
  
## 2、全局提示框（Message）  
 > ### app => com => message && app => com => service => message.service.ts 
 
 > 要点
 - @Injectable 装饰器来为 MessageService 配置了一个提供商，在整个应用中都是可用
 - 注入器 constructor(private message: MessageService) {}
 - 提供器 providers: [MessageService]
 - 通过订阅者模式传递数据（1.发送数据 2.接收数据）
    ```
    private subject :ReplaySubject<any>=new ReplaySubject<any>();
    
    // 需要发送的信息
    public send(message:any):void {
        this.subject.next(message)
    }
    
    //需要接收的信息
    public get():Observable<any> {
       return this.subject.asObservable();
    }
    ```
    ```
    组件中发送 this.message.send({a:'1',b:'2'})
    组件中接收 this.message.get().subscribe((res)=>{})
    ```
    
## 3、全局对话框（Dialog）实现方式同Message
    ```
      <com-dialog key="one">
        <span>自定义内容</span>
      </com-dialog>
      
      this.dialog.confirm({
          key: 'one', // 必填项
          title: "提示1",
          opacity: .5,
          okVisible: true,
          offVisible: true,
          accept: () => {
            this.dialog.close();
          },
          reject: () => {
            this.dialog.close();
          }
      });
    ```    
  

## 4、管道（Pipe）
- 身份证  固话+手机号 带*显示
```html
  <span>{{'340555199110268888' | idNumber}}</span>
  <span>{{'' | phone}}</span>
  
  <span>{{ 1575594423343 | date:'yyyy-MM-dd HH:mm'}}</span>
  <span>{{ 3.1415926 | number:'1.2-4'}}</span>
  <span>{{ 'abc' | uppercase}}</span>
  <span>{{ 'abc' | lowercase}}</span>
      
  <span>{{ 'happy' | slice:0:3}}</span>
  <span>{{ strNum | stringNum:15}}</span>
```

## 5、animation 动画
- trigger 触发器 负责定义各种 state 和它们之间变化来变化去 transition
- state 通过改变状态(state)来触发(trigger)动画(animate)
- transition 负责定义各种 state 之间错综复杂的转换关系

      void 表示空状态下   
      * 表示任何状态
      void => * 表示入场。
      * => void 表示出场。
      当然入场你也可以用:enter代替，出场可以用:leave代替。即
      transition('* => void', animate...)  也等于 :leave
      transition('void => *', animate...)  也等于 :enter
      
      transition('A => B',[animate,animate]) 数组 animate 会按序执行和 transition('A => B', sequence([animate,animate])) 是一样的 
      transition('A => B',group([animate,animate])) 不想按序执行可以使用 group,表示里的动画同时进行。


## 6、防二次重复点击 （指令）
> ### app => com => debounce-click.directive.ts
```html
<span appDebounceClick (debounceClick)="xxx">xxx</span>
```

## 7、监听键盘事件
> ### app => com => service => keyborad.service.ts 
```
    this._keydownBinding = new KeyboardBinding([Keys.KEY_UP, Keys.KEY_DOWN], keyCode => {
      if (keyCode === Keys.KEY_UP) {} else if (keyCode === Keys.KEY_DOWN) {}
    });
```
扩展：
```html
    import {fromEvent} from "rxjs/internal/observable/fromEvent";
    import {debounceTime} from "rxjs/operators";

    // 监听页面大小变化
    fromEvent(window, 'resize').subscribe((event) => {});
    
    // 监听页面刷新
    fromEvent(window, 'beforeunload').subscribe((event) => {});
    
    // 监听滚轮事件
    this.subscribeScroll = fromEvent(window, 'mousewheel')
    .pipe(debounceTime(10))
    .subscribe((event) => {
      // TODO
    });
    
```

## 8、滚动到顶部实现JS
```js
window.onscroll = function () {
    var topBtn = document.getElementById('top');
    // 获取视窗高度
    var winHeight = document.documentElement.clientHeight;
    var toTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 如果滚动超过一屏，返回顶部按钮出现，反之隐藏
    if (toTop >= winHeight) {
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }
    // 点击事件
    topBtn.onclick = function () {
      var timer = setInterval(function () {
        var toTop = document.documentElement.scrollTop || document.body.scrollTop;
        // 判断是否到达顶部，到达顶部停止滚动，没到达顶部继续滚动
        if (toTop == 0) {
          clearInterval(timer);
        } else {
          // 设置滚动速度
          var speed = Math.ceil(toTop / 4);
          // 页面向上滚动
          document.documentElement.scrollTop = document.body.scrollTop = toTop - speed;
        }
      }, 50);
    }
  }
```

## 9、放大镜功能 
![](https://github.com/xueyeqing/Angular2Template/blob/master/Angular2Template/src/app/demo/img-enlarge/image/d.png)

## 10、table
- type:1 上固定上下滚动;  
- type:2 左右滚动;  
- type:3 左固定;  
- type:4 上固定+左固定;
 
## 11、EChart
> 安装
```
    npm install echarts --save 
    npm install ngx-echarts --save
```

> 项目中引入echarts
```
    // angular.json 文件
    "scripts": [
       "node_modules/echarts/dist/echarts.min.js"
    ]
```
> 引入ngx-echarts模块
```
    // app.modules.ts
    imports: [NgxEchartsModule],
```
> 使用
```
```

## Anchor锚点使用说明

- dAnchor指令

  定义一个锚点

- dAnchorLink指令

  定义一个锚点的链接，点击链接会滑动到锚点，锚点处于页面顶部的时候也会激活链接的class


- dAnchorBox指令 （必须有一个容器，否则功能无法使用）

  定义一个扫描锚点的容器，放在dAnchor与dAnchorLink的公共父节点上，用于锚点和链接之间的通信

## 实例：  
- http://localhost:8888/Template/demo