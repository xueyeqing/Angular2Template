import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.less']
})
export class StickyComponent implements OnInit {

  stickyView = {
    top: 60,
    bottom: 0
  };
  demoDocViewerMain;
  constructor() { }

  ngOnInit() {
    this.demoDocViewerMain = document.querySelector('.sticky-main');
  }

}
