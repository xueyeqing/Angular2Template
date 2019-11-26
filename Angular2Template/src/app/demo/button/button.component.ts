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
  isLoading: boolean = true;

  constructor(private router: Router,private message: MessageService) { }

  ngOnInit() {
  }

  toCheckStyle() {
    this.router.navigateByUrl('/demo/checkstyle')
  }

  toDropDown() {
    this.router.navigateByUrl('/demo/dropdown')
  }

  toPager() {
    this.router.navigateByUrl('/demo/pager')
  }

  toDialog() {
    this.router.navigateByUrl('/demo/dialog')
  }

  changeTheme() {
    this.showDefault = !this.showDefault;
  }

  /**
   * 全局提示框
   */
  createBasicMessage(): void {
    // success info warning error loading
    this.message.loading('loading', {
      duration: 1000
    });
    setTimeout(()=>{
      this.message.success('success', {
        duration: 1000
      });
      setTimeout(()=>{
        this.message.info('info', {
          duration: 1000
        });
        setTimeout(()=>{
          this.message.warning('warning', {
            duration: 1000
          });
          setTimeout(()=>{
            this.message.error('error', {
              duration: 1000
            });
          },1000)
        },1000)
      },1000)
    },1000)

  }

}
