import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { ComponentDirective } from '../component.directive';
import { ComponentModel } from '../component.model';
import { IComponent } from '../component.interface';

@Component({
    selector: 'base-component',
    template: `
              <div class="base-component" [ngStyle]="componentModel.style">
                <ng-template component-host></ng-template>
              </div>
            `
})
export class BaseComponent implements AfterViewInit, OnDestroy {
    @Input() componentModel: ComponentModel;
    @ViewChild(ComponentDirective) componentHost: ComponentDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.loadComponent();
    }

    ngOnDestroy() {
        
    }

    loadComponent() {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentModel.component);

        let viewContainerRef = this.componentHost.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<IComponent>componentRef.instance).data = this.componentModel.data;
        this.cdr.detectChanges();
    }

}
