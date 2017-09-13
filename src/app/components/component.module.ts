import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponent } from './base-component';

import { TestComponent } from './test-component';
import { Test2Component } from './test2-component';

import { ComponentDirective } from './component.directive';


@NgModule({
    imports: [ CommonModule],
    providers: [],
    declarations: [
        BaseComponent, 
        ComponentDirective, 
        TestComponent,
        Test2Component
    ],
    exports: [BaseComponent],
    entryComponents: [TestComponent,Test2Component],
})
export class ComponentModule {}
