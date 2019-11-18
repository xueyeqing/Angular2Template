import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'com-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  @Input()
  text: string = '';

  baseUrl: string = 'assets/images/comm/';
  @Input()
  iconUrl: string = '';

  @Input()
  iconMode: string = 'none';

  @Input()
  height: number = 40;

  @Input()
  lr: number = 40; // padding-left padding-right

  @Input()
  br: number = 4; // border-radius


  constructor() { }

  ngOnInit() {
  }

}
