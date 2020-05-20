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
import {BaseComponent} from "./base/base.component";
import {RoutingPageComponent} from "./routing-page/routing-page.component";
import {Page1Component} from "./routing-page/page1/page1.component";
import {Page2Component} from "./routing-page/page2/page2.component";
import {Page3Component} from "./routing-page/page3/page3.component";
import {Page4Component} from './routing-page/page4/page4.component';
import {Page5Component} from "./routing-page/page5/page5.component";
import {TableComponent} from "./table/table.component";
import {ImgEnlargeComponent} from "./img-enlarge/img-enlarge.component";
import {TooltipComponent} from "./tooltip/tooltip.component";
import {EChartComponent} from "./echart/echart.component";
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {path: '', redirectTo: 'base'},
  {
    path: '', component: IndexComponent, children: [
      {path: 'base', component: BaseComponent, data: {title: 'base'}, canActivate: [SetTitleGuard]},
      {path: 'button', component: ButtonComponent, data: {title: 'demo-button'}, canActivate: [SetTitleGuard]},
      {
        path: 'checkstyle',
        component: CheckStyleComponent,
        data: {title: 'demo-check-style'},
        canActivate: [SetTitleGuard]
      },
      {path: 'dropdown', component: DropDownComponent, data: {title: 'demo-dropdown'}, canActivate: [SetTitleGuard]},
      {path: 'pager', component: PagerComponent, data: {title: 'demo-pager'}, canActivate: [SetTitleGuard]},
      {path: 'dialog', component: DialogComponent, data: {title: 'demo-dialog'}, canActivate: [SetTitleGuard]},
      {path: 'pipe', component: PipeComponent, data: {title: 'demo-pipe'}, canActivate: [SetTitleGuard]},
      {path: 'animation', component: AnimationComponent, data: {title: 'animation'}, canActivate: [SetTitleGuard]},
      {path: 'table', component: TableComponent, data: {title: 'table'}, canActivate: [SetTitleGuard]},
      {path: 'enlarge', component: ImgEnlargeComponent, data: {title: 'enlarge'}, canActivate: [SetTitleGuard]},
      {path: 'tooltip', component: TooltipComponent, data: {title: 'tooltip'}, canActivate: [SetTitleGuard]},
      {path: 'echart', component: EChartComponent, data: {title: 'echart'}, canActivate: [SetTitleGuard]},
      {path: 'status', component: StatusComponent, data: {title: 'status'}, canActivate: [SetTitleGuard]},

      {
        path: 'routing', component: RoutingPageComponent,
        children: [
          {path: '', redirectTo: 'page1'},
          {path: 'page1', component: Page1Component, data: {animation: '1'}},
          {path: 'page2', component: Page2Component, data: {animation: '2'}},
          {path: 'page3', component: Page3Component, data: {animation: '3'}},
          {path: 'page4', component: Page4Component, data: {animation: '4'}},
          {path: 'page5', component: Page5Component, data: {animation: '5'}}
        ],
        data: {title: 'animation-page'}, canActivate: [SetTitleGuard]
      },
    ], data: {title: 'index'}, canActivate: [SetTitleGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {
}
