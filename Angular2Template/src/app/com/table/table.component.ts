import { Component, OnInit, Input } from '@angular/core';

// declare var $: any;

@Component({
  selector: 'com-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  // 1:上固定上下滚动;  2:左右滚动;  3:左固定;  4: 上固定+左固定;
  @Input() type: number = 1; 
  @Input() height: number = 0;
  @Input() width: number = 0;
  @Input() maxHeight: number = 0;
  @Input() widthPercentL: string = '30%';
  @Input() widthPercentR: string = '70%';

  constructor() { }

  ngOnInit() {
  }

  /**
   * 监听元素的滚动 动态设置margin-left
   * @param {Element} el
   */
  onScrollChange(el: Element) {
    // js
    var l = document.querySelector('#result-table-left')
    var r = document.querySelector('#result-table-body')
    var ll = document.querySelector('#result-table-head')
    r.addEventListener('scroll', function () {
      l.scrollTop = r.scrollTop;
      ll.scrollLeft = r.scrollLeft
    })

    // let left = el.scrollLeft;
    // let top = el.scrollTop;
    // $('#result-table-head').css({'margin-left': -left});
    // $('#result-table-body').scrollTop(top);
    // $('#result-table-left').scrollTop(top);
  }

}
