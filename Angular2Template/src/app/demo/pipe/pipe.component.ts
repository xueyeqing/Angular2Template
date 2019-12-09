import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'com-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.less']
})
export class PipeComponent implements OnInit, OnDestroy {

  today: any = Date.now();//或者today:any = new Date();
  timer: any;

  strNum: string = '最多显示n个字，然后超过n个的会显示 ...';

  constructor() {
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.today = Date.now();// 或者this.today = new Date();
    }, 1000)
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
