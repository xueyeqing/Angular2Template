import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {Dialog} from './dialog';

@Injectable()
export class DialogService {
  zIndex: number = 999;
  // 指定要存储的值的数量 
  private requireDialogSource = new ReplaySubject<Dialog>(1);
  requireDialogSource$ = this.requireDialogSource.asObservable(); // 订阅者

  confirm(dialog: Dialog) {
    this.zIndex++;
    this.requireDialogSource.next(dialog);
    return this;
  }

  close() {
    this.requireDialogSource.next(null);
  }

  constructor() {
  }
}
