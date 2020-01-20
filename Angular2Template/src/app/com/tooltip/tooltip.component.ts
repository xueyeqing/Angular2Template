import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'com-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less']
})
export class TooltipComponent implements OnInit {

  @Input() defaultClass: boolean = true;
  @Input() topClass: boolean = false;
  @Input() bottomClass: boolean = false;
  @Input() rightClass: boolean = false;
  @Input() leftClass: boolean = false;
  @Input() tipContent: string = '';
  @Input() content: string = '';

  constructor() { }

  ngOnInit() {
  }

}
