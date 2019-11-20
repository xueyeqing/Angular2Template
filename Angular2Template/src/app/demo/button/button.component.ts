import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MessageService} from "../../com/service/message.service";

@Component({
  selector: 'demo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  showDefault: boolean = true;

  constructor(private router: Router,private message: MessageService) { }

  ngOnInit() {
  }

  toCheckStyle() {
    this.router.navigateByUrl('/demo/checkstyle')
  }

  changeTheme() {
    this.showDefault = !this.showDefault;
  }

  createBasicMessage(): void {
    this.message.success('This is a prompt message for success, and it will disappear in 5 seconds', {
      duration: 5000
    });
  }

}
