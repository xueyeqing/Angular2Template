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
    DialogComponent
  ],
  exports: [
    ClickOutsideDirective,
    ButtonComponent,
    CheckStyleComponent,
    MessageComponent,
    DropDownComponent,
    PagerComponent,
    DialogComponent
  ]
})
export class ComModule {
}
