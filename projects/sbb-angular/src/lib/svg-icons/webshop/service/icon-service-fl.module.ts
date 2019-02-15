/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-service-fl',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 13"><path d="M14.8 0h-2.5l1.8 1.8H14c-2.1 0-4 1.1-5.2 2.7-1.1-1.6-3-2.7-5.2-2.7L5.4 0H2.9L0 2.9l2.9 2.9h2.5L3.6 4h.1c2.2 0 4.1 1.8 4.1 4.1V13H10V8.1C10 5.8 11.8 4 14 4h.1l-1.8 1.8h2.5l2.9-2.9L14.8 0z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconServiceFlComponent extends IconBase {
  constructor() {
    super({ width: '18px', height: '13px', ratio: 1.3846153846153846 });
  }
}

@NgModule({
  declarations: [IconServiceFlComponent],
  exports: [IconServiceFlComponent],
})
export class IconServiceFlModule { }
