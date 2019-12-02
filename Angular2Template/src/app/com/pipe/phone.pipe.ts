import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value): string {
    let reg1 = /^([0-9]{3,5}-)?[0-9]{7,8}$/i;  // 固话
    let reg2 = /(1[0-9]{1}[0-9])[0-9]{4}([0-9]{4})/i; // 移动
    let phone = '';
    if(reg1.test(value)) {
      phone = value.replace(/^([0-9]{3,5}-)?([0-9]{4})([0-9]{3})$/i, "$1$2***");
    }
    if(reg2.test(value)) {
      phone = value.replace(/(1[0-9]{1}[0-9])([0-9]{4})(([0-9]{4}))/,"$1****$3");
    }

    return phone;
  }

}
