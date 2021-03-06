/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@Component({
  selector: 'sbb-icon-service-hn',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 13"><path d="M2.7 0h2.6L4.2 5.3h5.3L10.6 0h2.6l-2.7 13H7.9l1.2-5.7H3.8L2.6 13H0M16.1 0h3.3l2.8 9.9L24.4 0h2.5L24 13h-3.4L17.9 3l-2.1 10h-2.5"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconServiceHnComponent extends IconBase {
  constructor() {
    super({ width: '27px', height: '13px', ratio: 2.076923076923077 });
  }
}

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@NgModule({
  declarations: [IconServiceHnComponent],
  exports: [IconServiceHnComponent]
})
export class IconServiceHnModule {}
