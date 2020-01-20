import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {DemoRoutingModule} from "./demo-routing.module";
import {ButtonComponent} from './button/button.component';
import {ComModule} from "../com/com.module";
import {FormsModule} from "@angular/forms";
import {CheckStyleComponent} from './check-style/check-style.component';
import {DropDownComponent} from './drop-down/drop-down.component';
import {PagerComponent} from './pager/pager.component';
import {DialogComponent} from './dialog/dialog.component';
import {PipeComponent} from './pipe/pipe.component';
import {AnimationComponent} from './animation/animation.component';
import {ProjectItemComponent} from "./project-item/project-item.component";
import {IndexComponent} from './index/index.component';
import {BaseComponent} from './base/base.component';
import {RoutingPageComponent} from './routing-page/routing-page.component';
import {Page1Component} from "./routing-page/page1/page1.component";
import {Page2Component} from "./routing-page/page2/page2.component";
import {Page3Component} from "./routing-page/page3/page3.component";
import {Page4Component} from "./routing-page/page4/page4.component";
import {Page5Component} from "./routing-page/page5/page5.component";
import {TableComponent} from './table/table.component';
import {ImgEnlargeComponent} from "./img-enlarge/img-enlarge.component";
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [ButtonComponent, CheckStyleComponent, DropDownComponent, PagerComponent, DialogComponent,
    PipeComponent, AnimationComponent, ProjectItemComponent, IndexComponent, BaseComponent,
    RoutingPageComponent, Page1Component, Page2Component, Page3Component, Page4Component, Page5Component, TableComponent,
    ImgEnlargeComponent,
    TooltipComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    ComModule,
    FormsModule
  ]
})
export class DemoModule {
}
