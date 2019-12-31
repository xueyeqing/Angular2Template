import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {KeyboardBinding, Keys} from "../../com/service/keyboard.service";

const PAGES = [
  '/demo/routing/page1',
  '/demo/routing/page2',
  '/demo/routing/page3',
  '/demo/routing/page4',
  '/demo/routing/page5'
]

@Component({
  selector: 'demo-routing-page',
  templateUrl: './routing-page.component.html',
  styleUrls: ['./routing-page.component.less']
})
export class RoutingPageComponent implements OnInit {

  private _keydownBinding: KeyboardBinding;

  constructor(private _router: Router) {
    this._keydownBinding = new KeyboardBinding([Keys.KEY_LEFT, Keys.KEY_RIGHT], keyCode => {
      if (keyCode === Keys.KEY_LEFT) {
        this.left();
      } else if (keyCode === Keys.KEY_RIGHT) {
        this.right();
      }
    });
  }

  ngOnInit() {
  }

  left() {
    const currentUrl = this._router.url;
    const index = PAGES.indexOf(currentUrl);
    const nextIndex = Math.max(index-1,0);
    const url = PAGES[nextIndex];
    this._navigate(url);
  }

  right() {
    const currentUrl = this._router.url;
    const index = PAGES.indexOf(currentUrl);
    const nextIndex = Math.min(index+1,PAGES.length - 1);
    const url = PAGES[nextIndex];
    this._navigate(url);
  }

  private _navigate(path: string) {
    this._router.navigateByUrl(path);
  }

  isRouteActive(num: string) {
    let path = '/demo/routing';
    path += `/page${num}`;
    return this._router.url === path;
  }


}
