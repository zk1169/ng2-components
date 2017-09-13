import { Component,Input } from '@angular/core';
import { IComponent } from '../component.interface';

@Component({
    selector: 'test-component',
    template: `
              <div class="text-component">
                {{data?.name}}
              </div>
            `
})
export class TestComponent implements IComponent {
    @Input() data:any;
}
