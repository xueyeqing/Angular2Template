import {Injectable, TemplateRef} from '@angular/core';
import {MessageData, MessageDataOptions} from "../message/message.component";
import {ReplaySubject} from "rxjs/internal/ReplaySubject";

@Injectable()
export class MessageService {

  zIndex: number = 10000;
  private requireDialogSource = new ReplaySubject<MessageData>(1);
  requireDialogSource$ = this.requireDialogSource.asObservable();

  constructor() {
  }

  success(content: string | TemplateRef<void>, options?: MessageDataOptions): MessageData {
    return this.createMessage({type: 'success', content}, options);
  }

  error(content: string | TemplateRef<void>, options?: MessageDataOptions): MessageData {
    return this.createMessage({type: 'error', content}, options);
  }

  info(content: string | TemplateRef<void>, options?: MessageDataOptions): MessageData {
    return this.createMessage({type: 'info', content}, options);
  }

  warning(content: string | TemplateRef<void>, options?: MessageDataOptions): MessageData {
    return this.createMessage({type: 'warning', content}, options);
  }

  loading(content: string | TemplateRef<void>, options?: MessageDataOptions): MessageData {
    return this.createMessage({type: 'loading', content}, options);
  }

  createMessage(message: MessageData, options?: MessageDataOptions): MessageData {
    const resultMessage = {
      ...(message as MessageData),
      ...{
        options
      }
    };
    this.zIndex++;
    this.requireDialogSource.next(resultMessage);
    return resultMessage;
  }
}
