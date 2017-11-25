import { Component, Input, Output, EventEmitter,SimpleChanges } from '@angular/core';

@Component({
    selector: 'zk-select',
    styleUrls: ['./index.scss'],
    template: `
      <div class="zk-select">
        
      </div>
      `,
})
export class ZkSelectComponent {
    @Input() checked:Boolean;
    @Input() label:String;
    @Output() checkedChange = new EventEmitter<Boolean>();

    constructor() {
    }
}
