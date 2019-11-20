import {Component, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {MessageService} from "../service/message.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'com-message',
  exportAs: 'zMessage',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit, OnDestroy {

  @Input() visible: boolean;
  @Input() zMessage: MessageData;
  @Input() zIndex: number = -1;
  subscription: Subscription;
  timeOut;
  remaining;
  setTimeoutId;
  start;
  callback;

  constructor(private message: MessageService) {
  }

  ngOnInit() {
    this.subscription = this.message.requireDialogSource$.subscribe(zMessage => {
      if (zMessage != null) {
        this.zIndex = this.message.zIndex || this.zIndex;
        this.zMessage = zMessage;
        this.visible = true;
      } else {
        this.hide();
      }

      let duration = this.zMessage.options.duration;
      this.timeOut = this.myTimeout(() => {
        this.hide();
      }, duration ? duration : 3000)

    });
  }

  onEnter(): void {
    this.pause();
  }

  onLeave(): void {
    this.play();
  }

  // 可以暂停的setTimeOut
  myTimeout(callback, delay) {
    this.remaining = delay;
    this.callback = callback;
    this.play();
  }

  pause() {
    window.clearTimeout(this.setTimeoutId);
    let date: any = new Date();
    this.remaining -= date - this.start;
  }

  play() {
    this.start = new Date();
    window.clearTimeout(this.setTimeoutId);
    this.setTimeoutId= window.setTimeout(this.callback, this.remaining);
  }


  hide() {
    this.visible = false;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    clearTimeout(this.timeOut)
  }

}

export type MessageType = 'success' | 'info' | 'warning' | 'error' | 'loading';

export class MessageData {
  type?: MessageType | string;
  content?: string | TemplateRef<void>;
  state?: 'enter' | 'leave';
  options?: MessageDataOptions;
}

export class MessageDataOptions {
  duration?: number;
  animate?: boolean;
}
