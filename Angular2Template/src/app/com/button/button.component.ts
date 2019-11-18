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

  constructor() { }

  ngOnInit() {
  }

}
