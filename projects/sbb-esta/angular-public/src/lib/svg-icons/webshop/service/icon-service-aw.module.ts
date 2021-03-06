/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@Component({
  selector: 'sbb-icon-service-aw',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 13"><path d="M7.9 0L0 13h2.9l1.7-3h5.5l.4 3h2.6L10.8 0H7.9zm.9 2.3L9.7 8h-4l3.1-5.7zM31 0l-4.6 10-.1-10h-3.5l-4.3 10L18 0h-2.6l.8 13h3.2L24 2.6l.2 10.4h3.3l6.2-13"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconServiceAwComponent extends IconBase {
  constructor() {
    super({ width: '34px', height: '13px', ratio: 2.6153846153846154 });
  }
}

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@NgModule({
  declarations: [IconServiceAwComponent],
  exports: [IconServiceAwComponent]
})
export class IconServiceAwModule {}
