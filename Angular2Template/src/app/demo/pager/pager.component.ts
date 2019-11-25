import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.less']
})
export class PagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  queryPage(params) {
    console.log(params)
  }

}
