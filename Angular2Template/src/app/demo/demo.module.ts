import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {DemoRoutingModule} from "./demo-routing.module";
import {ButtonComponent} from './button/button.component';
import {ComModule} from "../com/com.module";
import {FormsModule} from "@angular/forms";
import {CheckStyleComponent} from './check-style/check-style.component';
import {DropDownComponent} from './drop-down/drop-down.component';

@NgModule({
  declarations: [ButtonComponent, CheckStyleComponent, DropDownComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    ComModule,
    FormsModule
  ]
})
export class DemoModule {
}
