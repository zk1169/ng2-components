import { Injectable }           from '@angular/core';

import { HeroJobAdComponent }   from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile-ad.component';
import { AdItem }               from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/