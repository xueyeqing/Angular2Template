import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idNumber'
})
export class IdNumberPipe implements PipeTransform {

  transform(value): string {
    if (!value) return '';
    let idCard = value.replace(/(^\d{6}|\d{3})(\d{10})(\d{1})(\d{1}|X$)/, "$1**********$3$4");
    return idCard;
  }

}
