import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-check-style',
  templateUrl: './check-style.component.html',
  styleUrls: ['./check-style.component.less']
})
export class CheckStyleComponent implements OnInit {

  items1: Items[] = [];
  items2: Items[] = [];

  constructor() { }

  ngOnInit() {
    this.items1 = [
      {id: 1, name: '中国', check: false},
      {id: 2, name: '美国', check: false},
      {id: 3, name: '英国', check: false},
    ]

    this.items2 = [
      {id: 11, name: '中国', check: false},
      {id: 22, name: '美国', check: false},
      {id: 32, name: '英国', check: false},
    ]
  }

  /**
   * 单选 返回接口
   * @param item
   */
  selRadioChanged(item) {
    console.log(item)
  }

  /**
   * 多选返回接口
   * @param item
   */
  selCheckChanged(item) {
    console.log(item)
  }


}

export class Items {
  name: string;
  id: number;
  check: boolean;
}
