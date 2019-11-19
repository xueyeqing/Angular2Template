import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'com-check-style',
  templateUrl: './check-style.component.html',
  styleUrls: ['./check-style.component.less']
})
export class CheckStyleComponent implements OnInit {

  @Input() type: string = 'radio';
  @Input() items = [];
  @Input() tb: number = 12; // label 上下间距
  @Input() lr: number = 12; // label 左右间距
  @Output() selChanged = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * 单选
   * @param item
   */
  radioChange(item) {
    item.check = true;
    this.selChanged.emit(item);
  }

  /**
   * 多选
   * @param item
   */
  checkBoxChange(item) {
    item.check = !item.check;
    let data = [];
    this.items.forEach(res => {
      if (res.check) {
        data.push(res)
      }
    });
    this.selChanged.emit(data);
  }

}
