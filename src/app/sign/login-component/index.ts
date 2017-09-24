import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ComponentModel } from '../../components/component.model';
import AuthModel from '../../models/auth.model';

@Component({
  selector: 'login-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class LoginComponent {
  componentList: ComponentModel[];
  private model: AuthModel = new AuthModel();
  private loginAysn: Observable<Object>;
  private radioList: Array<{checked:Boolean,label:String}>;

  constructor() {

    this.componentList = [
      new ComponentModel('TestComponent', { name: 'test'}, { width: '100px',display:'inline-block' }),
      new ComponentModel('Test2Component', { name: 'test2'}, { width: '200px',display:'inline-block' })
    ];

    this.radioList = [
      {
        checked: false,
        label: 'radio1'
      },
      {
        checked: false,
        label: 'radio2'
      },
      {
        checked: false,
        label: 'radio3'
      }
    ];
  }

  login(){
    console.log(`login.model.autoLogin=${this.model.autoLogin}`);
    console.log(`login.radioList=${JSON.stringify(this.radioList)}`);
  }
}
