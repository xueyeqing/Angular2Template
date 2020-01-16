import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'demo-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * 监听元素的滚动 动态设置margin-left
   * @param {Element} el
   */
  onScrollChange(el: Element) {

    // js
    // var l = document.querySelector('#result-table-left')
    // var r = document.querySelector('#result-table-body')
    // var ll = document.querySelector('#result-table-head')
    // r.addEventListener('scroll', function () {
    //   l.scrollTop = r.scrollTop;
    //   ll.scrollLeft = r.scrollLeft
    // })

    let left = el.scrollLeft;
    let top = el.scrollTop;
    $('#result-table-head').css({'margin-left': -left});
    $('#result-table-body').scrollTop(top);
    $('#result-table-left').scrollTop(top);
  }

}
