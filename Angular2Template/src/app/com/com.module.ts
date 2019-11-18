import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClickOutsideDirective} from './click-outside.directive';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ClickOutsideDirective
  ],
  exports: [
    ClickOutsideDirective
  ]
})
export class ComModule {
}
