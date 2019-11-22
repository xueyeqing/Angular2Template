import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'com-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.less']
})
export class DropDownComponent implements OnInit {

  @Output() onChanged = new EventEmitter<DropDown[]>();
  @Input() list: DropDown[] = [];
  @Input() type: string = 'default'; // multiple 多选
  @Input() text: string = '';
  @Input() width: number = 200;
  @Input() height: number = 35;
  @Input() lineHeight: number = 35;
  @Input() isShow: boolean = false;
  curItem: any = [];
  top: string = '15px';

  constructor() {
  }

  ngOnInit() {
    if (this.height) {
      this.top = (this.height - 3) / 2 + "px";
    }
  }

  // 选择内容
  selOption(event: MouseEvent, item: DropDown) {
    event.stopPropagation();
    this.isShow = !this.isShow;
    if (this.type == 'multiple') {
      this.curItem.push(item);
      this.list.forEach((res, i) => {
        if (res.id == item.id) {
          this.list[i].hide = true;
        }
      });
    } else {
      this.curItem = [item];
    }
    this.onChanged.emit(this.curItem);
  }

  // 下拉框
  clickSelect(event: MouseEvent) {
    event.stopPropagation();
    this.isShow = !this.isShow;
  }

  // 清空当前选择的数据
  clearItems(event: MouseEvent) {
    event.stopPropagation();
    this.initData(this.list);
    this.curItem = [];
    this.onChanged.emit([]);
  }

  initData(list) {
    list.forEach(item => {
      item.hide = false;
    })
  }

  clickOutsideEvent() {
    this.isShow = false;
  }

}

export class DropDown {
  id: number;
  name: string;
  hide?: boolean;
  sel?: boolean;
}
