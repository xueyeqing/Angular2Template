import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SetTitleGuard} from "../com/guard/set-title.guard";
import {ButtonComponent} from "./button/button.component";
import {CheckStyleComponent} from "./check-style/check-style.component";

const routes: Routes = [
  { path: '', component: ButtonComponent, data: { title: 'demo-button' }, canActivate: [SetTitleGuard] },
  { path: 'button', component: ButtonComponent, data: { title: 'demo-button' }, canActivate: [SetTitleGuard] },
  { path: 'checkstyle', component: CheckStyleComponent, data: { title: 'demo-check-style' }, canActivate: [SetTitleGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {
}
