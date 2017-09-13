import { Component } from '@angular/core';

import { ComponentModel } from '../../components/component.model';

@Component({
  selector: 'login-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class LoginComponent {
  componentList: ComponentModel[];

  constructor() {

    this.componentList = [
      new ComponentModel('TestComponent', { name: 'test'}, { width: '100px',display:'inline-block' }),
      new ComponentModel('Test2Component', { name: 'test2'}, { width: '200px',display:'inline-block' })
    ];
  }
}
