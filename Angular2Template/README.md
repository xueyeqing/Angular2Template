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
  
## 实例：  
- http://localhost:8888/Template/demo/button  