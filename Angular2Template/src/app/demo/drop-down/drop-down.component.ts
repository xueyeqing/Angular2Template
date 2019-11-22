import {Component, OnInit} from '@angular/core';
import {DropDown} from "../../com/drop-down/drop-down.component";

@Component({
  selector: 'demo-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.less']
})
export class DropDownComponent implements OnInit {

  list: DropDown[] = [{id: 1, name: "item1"}, {id: 2, name: "item2"}, {id: 3, name: "item3"}, {id: 4, name: "item4"}, {id: 5, name: "item5"}];
  list2: DropDown[] = [{id: 11, name: "item1"}, {id: 22, name: "item2"}, {id: 33, name: "item3"}, {id: 44, name: "item4"}, {id: 55, name: "item5"}];

  constructor() {
  }

  ngOnInit() {
  }

  onChanged(item: DropDown[]) {
    console.log(item)
  }

}
