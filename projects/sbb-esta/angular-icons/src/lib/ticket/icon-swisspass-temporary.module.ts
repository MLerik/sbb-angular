/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-swisspass-temporary',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd" stroke="#000">
          <path
            d="M16.5 10.5H18h-1.5V12v-1.5zm0 0H15h1.5V9v1.5zM6 10.5h4-4zm0 2h6-6zm0 2h5-5z"
          />
          <path
            stroke-dasharray="1 1"
            d="M18.5 17.5h-13a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2z"
          />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd" stroke="#000">
          <path
            d="M24.75 15.751H27h-2.25v2.25-2.25zm0 0H22.5h2.25v-2.25 2.25zM9 15.75h6-6zm0 3h9-9zm0 3h7.5H9z"
          />
          <path
            stroke-dasharray="1 1"
            d="M27.75 26.25H8.25c-1.656 0-3-1.344-3-3v-10.5c0-1.656 1.344-3 3-3h19.5c1.656 0 3 1.344 3 3v10.5c0 1.656-1.344 3-3 3z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSwisspassTemporaryComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSwisspassTemporaryComponent],
  exports: [IconSwisspassTemporaryComponent]
})
export class IconSwisspassTemporaryModule {}