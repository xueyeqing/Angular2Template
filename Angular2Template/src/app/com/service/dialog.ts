import {EventEmitter} from "@angular/core";

export interface Dialog{
  key: string;
  width?: number;
  height?: number;
  marginTop?: number;
  title?: string;
  delay?:number;
  icon?: string;
  opacity?:number;
  close?: boolean;
  accept?: Function;
  reject?: Function;
  okLabel?: string;
  offLabel?: string;
  okVisible?: boolean;
  offVisible?: boolean;
  acceptEvent?: EventEmitter<any>;
  rejectEvent?: EventEmitter<any>;
}