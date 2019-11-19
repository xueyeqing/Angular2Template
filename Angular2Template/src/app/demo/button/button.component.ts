import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'demo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toCheckStyle() {
    this.router.navigateByUrl('/demo/checkstyle')
  }

}