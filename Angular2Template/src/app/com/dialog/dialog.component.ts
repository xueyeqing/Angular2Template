import {Component, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {Dialog} from "../service/dialog";
import {Subscription} from "rxjs/internal/Subscription";
import {DialogService} from "../service/dialog.service";
import {timer} from "rxjs/internal/observable/timer";

@Component({
  selector: 'com-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less']
})
export class DialogComponent implements OnInit, OnDestroy {

  @Input() key: string; // 标识当前对话框的唯一性
  @Input() width: number = 450;
  @Input() height: number = 180;
  @Input() visible: boolean;
  @Input() title: string; // 对话框标题
  @Input() opacity = .5;
  @Input() marginTop = 20;
  @Input() close: boolean = true;
  @Input() zIndex: number;
  @Input() delay: number; // 对话框的生命周期

  dialog: Dialog;
  subscription: Subscription;

  constructor(private dialogService: DialogService) { }

  accept() {
    if (this.dialog.acceptEvent) {
      this.dialog.acceptEvent.emit();
    } else {
      this.hide();
    }
  }

  reject() {
    if (this.dialog.rejectEvent) {
      this.dialog.rejectEvent.emit();
    } else {
      this.hide();
    }
  }

  hide() {
    this.visible = false;
    this.dialog = null;
  }

  ngOnInit() {
    this.subscription = this.dialogService.requireDialogSource$.subscribe(dialog => {
      if (dialog == null) {
        this.hide();
        return;
      }
      if (dialog.key === this.key) {
        this.dialog = dialog;
        this.title = this.dialog.title || this.title;
        this.width = this.dialog.width || this.width;
        this.height = this.dialog.height || this.height;
        this.marginTop = (this.dialog.marginTop == 0 || this.dialog.marginTop) ? this.dialog.marginTop : this.marginTop;
        this.close = this.dialog.close || this.close;
        this.zIndex = this.dialogService.zIndex || this.zIndex;
        this.opacity = this.dialog.opacity || this.opacity;
        this.delay = this.dialog.delay || this.delay;

        // 确定按钮回调
        if (this.dialog.accept) {
          this.dialog.acceptEvent = new EventEmitter();
          this.dialog.acceptEvent.subscribe(() => {
            let isClose = this.dialog.accept();
            if (isClose !== false) {
              this.hide();
            }
          })
        }

        // 取消按钮回调
        if (this.dialog.reject) {
          this.dialog.rejectEvent = new EventEmitter();
          this.dialog.rejectEvent.subscribe(() => {
            let isClose = this.dialog.reject();
            if (isClose !== false) {
              this.hide();
            }
          })
        }
        if (this.delay && this.delay != 0) {
          timer(this.delay).subscribe(val => this.visible = false);
        }
        this.visible = true;
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
