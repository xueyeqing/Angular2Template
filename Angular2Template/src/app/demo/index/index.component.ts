import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import PHOTOS from '../photos';
import {loadingAnimation} from "../../com/animation/animation";

const MIN_PAGE_TIMEOUT = 2000;

@Component({
  selector: 'com-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],
  animations: [loadingAnimation]
})
export class IndexComponent implements OnInit {

  public ready = false;
  private _preloaded = false;
  private _timeoutDone = false;
  public percentage = 0;

  constructor(private _cd: ChangeDetectorRef, private _router: Router) {
  }

  ngOnInit() {

    this.preloadPhotos(() => {
      this._preloaded = true;
      this.percentage = 100;
      this._onReady();
    }, (doneCount, totalCount) => {
      this.percentage = Math.ceil((doneCount / totalCount) * 100);
      this._cd.detectChanges(); // 实时检测页面及其子元素的变化
    });

    setTimeout(() => {
      this._timeoutDone = true;
      this._onReady();
    }, MIN_PAGE_TIMEOUT);

  }

  private _onReady() {
    if (this._preloaded && this._timeoutDone) {
      this.ready = true;
      this._cd.detectChanges();
    }
  }

  preloadPhotos(onDoneCb: () => any, onProgressCb: (doneCount: number, totalCount: number) => any) {
    let count = 0;
    let done = false;
    PHOTOS.forEach(photo => {
      const img = new Image();
      img.onload = onImageDone;
      img.src = photo.src;
    });

    function onImageDone() {
      if (!done && ++count >= PHOTOS.length) {
        done = true;
        onDoneCb();
      } else {
        onProgressCb(count, PHOTOS.length);
      }

    }
  }

  get activeRoutePath(): string {
    return this._router.url;
  }

  isActiveRoute(path: string) {
    if (path.length > 1) {
      return this.activeRoutePath === path;
    }
  }


}
