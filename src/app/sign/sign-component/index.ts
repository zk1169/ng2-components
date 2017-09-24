import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'sign-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class SignComponent {
  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('zh');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('zh');
  }
}
