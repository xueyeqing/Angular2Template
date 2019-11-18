import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClickOutsideDirective} from './click-outside.directive';
import {FormsModule} from "@angular/forms";
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ClickOutsideDirective,
    ButtonComponent
  ],
  exports: [
    ClickOutsideDirective,
    ButtonComponent
  ]
})
export class ComModule {
}
