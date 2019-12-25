import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SetTitleGuard} from "../com/guard/set-title.guard";
import {ButtonComponent} from "./button/button.component";
import {CheckStyleComponent} from "./check-style/check-style.component";
import {DropDownComponent} from "./drop-down/drop-down.component";
import {PagerComponent} from "./pager/pager.component";
import {DialogComponent} from "./dialog/dialog.component";
import {PipeComponent} from "./pipe/pipe.component";
import {AnimationComponent} from "./animation/animation.component";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  {
    path: '', component: IndexComponent, children: [
      { path: 'button', component: ButtonComponent, data: { title: 'demo-button' }, canActivate: [SetTitleGuard] },
      { path: 'checkstyle', component: CheckStyleComponent, data: { title: 'demo-check-style' }, canActivate: [SetTitleGuard] },
      { path: 'dropdown', component: DropDownComponent, data: { title: 'demo-dropdown' }, canActivate: [SetTitleGuard] },
      { path: 'pager', component: PagerComponent, data: { title: 'demo-pager' }, canActivate: [SetTitleGuard] },
      { path: 'dialog', component: DialogComponent, data: { title: 'demo-dialog' }, canActivate: [SetTitleGuard] },
      { path: 'pipe', component: PipeComponent, data: { title: 'demo-pipe' }, canActivate: [SetTitleGuard] },
      { path: 'animation', component: AnimationComponent, data: { title: 'animation' }, canActivate: [SetTitleGuard] },
    ], data: {title: 'index'}, canActivate: [SetTitleGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {
}
