/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-question-mark',
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
          fill-rule="evenodd"
          d="M11.014 18.98v-1.939h2.015v1.939h-2.015zm-3.18-9.437c.043-1.157.27-2.052.681-2.686a3.818 3.818 0 0 1 1.511-1.353c.627-.317 1.333-.475 2.117-.475 1.262 0 2.266.357 3.012 1.072.697.659 1.045 1.527 1.045 2.602 0 .889-.236 1.654-.709 2.294-.212.293-.719.83-1.52 1.614-.355.342-.602.627-.742.853a2.324 2.324 0 0 0-.293.844c-.063.335-.094.771-.094 1.306h-1.585c.012-.951.096-1.657.251-2.117.113-.336.272-.637.481-.905.208-.267.67-.768 1.385-1.501.46-.473.762-.898.904-1.278.118-.323.178-.653.178-.989 0-.621-.171-1.144-.513-1.566-.411-.516-1.017-.774-1.819-.774-1.66 0-2.555 1.019-2.686 3.059H7.834z"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill-rule="evenodd"
          d="M16.521 28.47v-2.909h3.023v2.909H16.52zm-4.77-14.155c.065-1.736.405-3.079 1.022-4.03a5.728 5.728 0 0 1 2.266-2.029c.94-.476 2-.713 3.176-.713 1.893 0 3.398.536 4.518 1.609 1.045.988 1.567 2.29 1.567 3.903 0 1.333-.354 2.48-1.064 3.44-.317.44-1.078 1.245-2.28 2.421-.532.514-.902.941-1.113 1.28-.208.34-.357.762-.439 1.266-.095.503-.141 1.157-.141 1.959h-2.378c.018-1.427.144-2.485.377-3.175.17-.505.408-.956.721-1.358.313-.4 1.005-1.152 2.078-2.252.69-.709 1.143-1.346 1.356-1.916.177-.485.267-.98.267-1.484 0-.931-.257-1.716-.77-2.349-.616-.774-1.525-1.161-2.728-1.161-2.49 0-3.832 1.528-4.029 4.588h-2.406z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconQuestionMarkComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconQuestionMarkComponent],
  exports: [IconQuestionMarkComponent]
})
export class IconQuestionMarkModule {}
