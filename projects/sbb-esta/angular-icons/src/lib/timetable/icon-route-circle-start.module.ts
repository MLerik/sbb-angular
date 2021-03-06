/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-route-circle-start',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#000"
          d="M3.5 12.5a6 6 0 1 1 12.002.002A6 6 0 0 1 3.5 12.5zm3 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm9 0H21"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M5.25 18.75a9 9 0 1 1 18 0 9 9 0 0 1-18 0zm4.5.001a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0zm13.5 0h8.25"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconRouteCircleStartComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconRouteCircleStartComponent],
  exports: [IconRouteCircleStartComponent]
})
export class IconRouteCircleStartModule {}
