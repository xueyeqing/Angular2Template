import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'demo-img-enlarge',
  templateUrl: './img-enlarge.component.html',
  styleUrls: ['./img-enlarge.component.less']
})
export class ImgEnlargeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  mouseEnter(e) {
    this.showDiv();
    this.move(e)
  }

  mouseMove(e) {
    this.showDiv();
    this.move(e)
  }

  mouseLeave() {
    this.hideDiv();
  }

  /**
   * outerHeight(): 返回元素的高度（包含 padding 和 border）
   * false - 默认。不包含 margin。 true - 包含 margin。
   * @param e
   */
  move(e) {
    var l = e.clientX - $('.img-one').offset().left - $('#mark').outerWidth() / 2;
    var t = e.clientY - $('.img-one').offset().top - $('#mark').outerHeight() / 2;
    var minL = 0, minT = 0;
    var maxL = $('.img-one').outerWidth() - $('#mark').outerWidth();
    var maxT = $('.img-one').outerHeight() - $('#mark').outerHeight();
    l = l <= minL ? 0 : (l >= maxL ? maxL : l);
    t = t <= minT ? 0 : (t >= maxT ? maxT : t);
    $('#mark').css({left: l, top: t});
    $('.img-two').children("img").css({marginLeft: -1 * l, marginTop: -1 * t});
  }

  showDiv() {
    //首先让mark遮罩显示
    $('#mark').stop().show();
    //再让img-two显示
    $('.img-two').stop().show();
  }

  hideDiv() {
    $('#mark').stop().hide();
    $('.img-two').stop().hide();
  }

}
