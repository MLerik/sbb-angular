/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@Component({
  selector: 'sbb-icon-percent',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 8l-9 9 1 1 9-9-1-1zm-6 1c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1m0-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4 7c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1m0-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconPercentComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@NgModule({
  declarations: [IconPercentComponent],
  exports: [IconPercentComponent]
})
export class IconPercentModule {}
