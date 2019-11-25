import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SetTitleGuard} from "../com/guard/set-title.guard";
import {ButtonComponent} from "./button/button.component";
import {CheckStyleComponent} from "./check-style/check-style.component";
import {DropDownComponent} from "./drop-down/drop-down.component";
import {PagerComponent} from "./pager/pager.component";

const routes: Routes = [
  { path: '', component: ButtonComponent, data: { title: 'demo-button' }, canActivate: [SetTitleGuard] },
  { path: 'button', component: ButtonComponent, data: { title: 'demo-button' }, canActivate: [SetTitleGuard] },
  { path: 'checkstyle', component: CheckStyleComponent, data: { title: 'demo-check-style' }, canActivate: [SetTitleGuard] },
  { path: 'dropdown', component: DropDownComponent, data: { title: 'demo-dropdown' }, canActivate: [SetTitleGuard] },
  { path: 'pager', component: PagerComponent, data: { title: 'demo-pager' }, canActivate: [SetTitleGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {
}
