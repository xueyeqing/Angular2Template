import { Component, OnInit } from '@angular/core';
import {DialogService} from "../../com/service/dialog.service";

@Component({
  selector: 'demo-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less']
})
export class DialogComponent implements OnInit {

  constructor(private dialog: DialogService) { }

  ngOnInit() {
  }

  openDialog1() {
    this.dialog.confirm({
      key: 'one',
      title: "提示1",
      opacity: .5,
      okVisible: true,
      offVisible: true,
      accept: () => {
        console.log("确定1")
        this.dialog.close();
      },
      reject: () => {
        console.log("取消1")
        this.dialog.close();
      }
    });
  }

  openDialog2() {
    this.dialog.confirm({
      key: 'two',
      title: "提示2",
      width: 450,
      height: 200,
      reject: () => {
        console.log("取消1")
        this.dialog.close();
      }
    });
  }

  openDialog3() {
    this.dialog.confirm({
      key: 'three',
      title: '提示3',
      okVisible: true,
      offVisible: false,
      accept: () => {
        console.log("确定3")
        this.dialog.close();
      }
    });
  }

  openDialog4() {
    this.dialog.confirm({
      key: 'four',
      width: 450,
      height: 140,
      okVisible: true,
      offVisible: false,
      accept: () => {
        this.dialog.close();
      }
    });
  }

  openDialog5() {
    this.dialog.confirm({
      key: 'five',
      width: 450,
      height: 50,
      marginTop: 0,
    });

    setTimeout(()=>{
      this.dialog.close()
    },2000)
  }

  openDialog6() {
    this.dialog.confirm({
      key: 'six',
      width: 450,
      height: 50,
      marginTop: 0,
      delay: 2000
    });
  }

}
