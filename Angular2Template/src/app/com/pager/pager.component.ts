import {Component, OnInit, Output, Input, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';

@Component({
  selector: 'com-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.less']
})
export class PagerComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.totalCount) {
      let previousValue: number = changes.totalCount.previousValue;
      let currentValue: number = changes.totalCount.currentValue;
      if (currentValue != previousValue) {
        if (this.pageCount < this.pageIndex) {
          this.page(1);
        } else {
          this.updatePageLinks();
        }
      }
    }
  }

  @Output()
  paged = new EventEmitter<PagerParam>();
  @Input()
  pageIndex: number = 1;
  @Input()
  pageSize: number = 10;
  @Input()
  totalCount: number = 0;
  @Input()
  pageLinkSize: number = 4;
  pageLinks: any[] = [];
  inputPageIndex: number;

  constructor() {
  }

  ngOnInit() {
    this.updatePageLinks();
  }

  get pageCount(): number {
    return Math.ceil(this.totalCount / this.pageSize);
  }

  get realPageCount(): number {
    if (this.pageIndex == this.pageCount) {
      if (this.totalCount % this.pageSize == 0) {
        return this.pageSize;
      } else {
        return this.totalCount % this.pageSize;
      }
    } else {
      return this.pageSize;
    }
  }

  updatePageLinks(): void {
    this.pageLinks = [];
    let pageCount: number = this.pageCount;
    let visiblePages = Math.min(this.pageLinkSize, pageCount);

    let start = Math.max(0, Math.ceil(this.pageIndex - (visiblePages - 2)));
    let end = Math.min(pageCount - 1, start + visiblePages - 1);
    let delta = this.pageLinkSize - (end - start + 1);
    start = Math.max(0, start - delta);

    start++;
    end++;

    if (start > 1) {
      this.pageLinks.push(1);
    }
    if (start > 2) {
      this.pageLinks.push("...");
    }
    for (let i = start; i <= end; i++) {
      this.pageLinks.push(i);
    }
    if (end < (pageCount - 1)) {
      this.pageLinks.push("...");
    }
    if (end < pageCount) {
      this.pageLinks.push(pageCount);
    }
  }

  page(pageIndex: number) {
    let pageCount: number = this.pageCount;
    if (pageIndex >= 1 && pageIndex <= pageCount) {
      this.pageIndex = pageIndex;
      let pagerParam: PagerParam = new PagerParam(this.pageIndex, this.pageSize);
      this.updatePageLinks();
      this.paged.emit(pagerParam);
    }
  }

  skip() {
    this.inputPageIndex = parseInt(this.inputPageIndex.toString());
    if (this.inputPageIndex == this.pageIndex) {
      return;
    }
    this.page(this.inputPageIndex);
  }
}

export class PagerParam {
  constructor(public pageIndex: number, public pageSize: number) {};
}
