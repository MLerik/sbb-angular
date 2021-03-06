/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-him-info',
  // tslint:disable:max-line-length
  template: `
    <svg
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="16" height="16" fill="#EB0000" rx="2" />
        <path
          fill="#FFF"
          d="M6.6 3.48a1.48 1.48 0 1 1 2.961 0 1.48 1.48 0 0 1-2.96 0zm-.806 9.185h.93V6.276h-.93a.294.294 0 1 1 0-.587H9.39v6.976h.905a.294.294 0 0 1 0 .587H9.39l-2.667.001h-.929a.294.294 0 1 1 0-.588z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconHimInfoComponent extends IconBase {
  constructor() {
    super({ width: '16px', height: '16px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconHimInfoComponent],
  exports: [IconHimInfoComponent]
})
export class IconHimInfoModule {}
