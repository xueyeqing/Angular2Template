import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stringNum'
})
export class StringNumPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let len = args || 10;
    return value && value.length > 10 ? value.substr(0, len) + '...' : value;
  }

}
