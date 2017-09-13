import { Component,Input } from '@angular/core';
import { IComponent } from '../component.interface';

@Component({
    selector: 'test2-component',
    template: `
              <div class="text-component">
                {{data?.name}}
              </div>
            `
})
export class Test2Component implements IComponent {
    @Input() data:any;
}
