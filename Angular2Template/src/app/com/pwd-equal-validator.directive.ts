import { Directive, Input, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validatePwdEqual]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=>PwdEqualValidatorDirective),
      multi: true
    }
  ]
})
export class PwdEqualValidatorDirective implements Validator{
  @Input() password: string;
  constructor() { }
  validate(c: AbstractControl): { [key: string]: any } {
    const v = c.value;
    if (v !== this.password) {
      return { validatePwdEqual: '两次密码不一致' };
    }
    return null;
  }

}
