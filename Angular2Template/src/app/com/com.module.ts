import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClickOutsideDirective} from './click-outside.directive';
import {FormsModule} from "@angular/forms";
import {ButtonComponent} from './button/button.component';
import {CheckStyleComponent} from "./check-style/check-style.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ClickOutsideDirective,
    ButtonComponent,
    CheckStyleComponent
  ],
  exports: [
    ClickOutsideDirective,
    ButtonComponent,
    CheckStyleComponent
  ]
})
export class ComModule {
}
