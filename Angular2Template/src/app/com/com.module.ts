import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClickOutsideDirective} from './click-outside.directive';
import {FormsModule} from "@angular/forms";
import {ButtonComponent} from './button/button.component';
import {CheckStyleComponent} from "./check-style/check-style.component";
import {MessageComponent} from './message/message.component';
import {DropDownComponent} from './drop-down/drop-down.component';
import {PagerComponent} from "./pager/pager.component";
import {DialogComponent} from './dialog/dialog.component';
import { IdNumberPipe } from './pipe/id-number.pipe';
import { PhonePipe } from './pipe/phone.pipe';
import { StringNumPipe } from './pipe/string-num.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ClickOutsideDirective,
    ButtonComponent,
    CheckStyleComponent,
    MessageComponent,
    DropDownComponent,
    PagerComponent,
    DialogComponent,
    IdNumberPipe,
    PhonePipe,
    StringNumPipe
  ],
  exports: [
    ClickOutsideDirective,
    ButtonComponent,
    CheckStyleComponent,
    MessageComponent,
    DropDownComponent,
    PagerComponent,
    DialogComponent,
    IdNumberPipe,
    PhonePipe,
    StringNumPipe
  ]
})
export class ComModule {
}
