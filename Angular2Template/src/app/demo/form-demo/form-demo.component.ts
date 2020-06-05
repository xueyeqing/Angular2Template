import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.less']
})
export class FormDemoComponent implements OnInit {

  constructor() { }

  user: any = {
    pwd: '',
    confirmPwd: ''
  }

  ngOnInit() {
  }
  

  onSubmit() {
    console.log("confirm",this.user)  
  }

  validatePwdEqual(registerForm: any) {
    if (!registerForm.controls.confirmpwd.pristine) { // 第二个input操作过
      if (this.user.pwd !== this.user.confirmPwd) {
        registerForm.controls.confirmpwd.setErrors({
          'validatePwdEqual': '两次密码不一致'
        });
      } else {
        registerForm.controls.confirmpwd.setErrors({
          'validatePwdEqual': ''
        });
      }
    }
  }

}
