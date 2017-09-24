import { Type } from '@angular/core';
import _ from 'lodash';

import { TestComponent } from './test-component';
import { Test2Component } from './test2-component';

export class ComponentModel {
  static componentList: Type<any>[] = [
    TestComponent,
    Test2Component
  ];
  constructor(private componentStr: String, public data: any, public style?: Object) {
    
  }

  get component(): Type<any> {
    return _.find(ComponentModel.componentList, item => item.name === this.componentStr);
  }

  //constructor(public component: Type<any>, public options: any) {}
}
