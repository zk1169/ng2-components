// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ZkButtonComponent } from './components/button-component';
import { ZkCheckboxComponent } from './components/checkbox-component';
import { ZkRadioComponent } from './components/radio-component';
import { ZkBusyDirective } from './directives/busy.directive';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [
    ZkButtonComponent,
    ZkCheckboxComponent,
    ZkRadioComponent,
    ZkBusyDirective,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ZkButtonComponent,
    ZkCheckboxComponent,
    ZkRadioComponent,
    ZkBusyDirective,
  ],
})
export class SharedModule { }
