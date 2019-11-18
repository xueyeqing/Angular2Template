import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ButtonComponent} from "./button/button.component";
import {SetTitleGuard} from "../com/guard/set-title.guard";

const routes: Routes = [
  { path: 'button', component: ButtonComponent, data: { title: 'demo-button' }, canActivate: [SetTitleGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {
}
