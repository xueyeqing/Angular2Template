import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'com-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.less']
})
export class StatusComponent {

  private _type: string;
  classMap = {};

  @Input() get type() {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
    this.setClassMap();
  }

  setClassMap() {
    this.classMap = 'com-status-bg-' + this.type;
  }

}
