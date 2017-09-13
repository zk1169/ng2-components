import { Type } from '@angular/core';

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
    let _class = null;
    ComponentModel.componentList.forEach((item) => {
      if (item.name === this.componentStr) {
        _class = item;
        return;
      }
    });
    return _class;
  }

  //constructor(public component: Type<any>, public options: any) {}
}
