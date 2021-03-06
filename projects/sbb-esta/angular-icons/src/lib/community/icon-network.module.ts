/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-network',
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
          d="M9.538 14.503A3.488 3.488 0 0 1 8.5 12c0-1.165.55-2.184 1.408-2.817L6.976 5.154c-.26.218-.598.346-.976.346-.85 0-1.5-.65-1.5-1.5S5.15 2.5 6 2.5s1.5.65 1.5 1.5c0 .472-.2.882-.524 1.154l2.933 4.03A3.505 3.505 0 0 1 12 8.503 3.47 3.47 0 0 1 15.501 12c0 1.954-1.547 3.5-3.501 3.5a3.49 3.49 0 0 1-2.462-.997l-2.625 2.56A2.005 2.005 0 0 0 5.5 16.5c-1.13 0-2 .869-2 1.998a1.97 1.97 0 0 0 2 2.002c1.13 0 2.006-.872 2.006-2.002 0-.571-.225-1.076-.593-1.436zm8.144.139l-2.502-1.158 2.502 1.158c.31-.686.992-1.142 1.818-1.142 1.136 0 2 .864 2 2 0 1.136-.864 2-2 2-1.136 0-2-.864-2-2 0-.31.065-.6.182-.858zm.083-6.778l-2.942 2.049 2.941-2.05A1.51 1.51 0 0 1 17.5 7c0-.844.656-1.505 1.5-1.505s1.51.661 1.51 1.505c0 .844-.666 1.5-1.51 1.5-.52 0-.968-.248-1.236-.636z"
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
          d="M14.306 21.754A5.232 5.232 0 0 1 12.75 18a5.21 5.21 0 0 1 2.113-4.225l-4.4-6.044A2.258 2.258 0 0 1 9 8.25c-1.275 0-2.25-.975-2.25-2.25S7.725 3.75 9 3.75s2.25.975 2.25 2.25c0 .708-.3 1.324-.787 1.731l4.4 6.044A5.258 5.258 0 0 1 18 12.756c2.931 0 5.252 2.313 5.252 5.244 0 2.931-2.321 5.25-5.252 5.25-1.45 0-2.75-.567-3.694-1.496l-3.936 3.84a3.007 3.007 0 0 0-2.12-.844c-1.694 0-3 1.303-3 2.997 0 1.695 1.306 3.003 3 3.003 1.695 0 3.009-1.308 3.009-3.003a2.98 2.98 0 0 0-.89-2.153zm12.216.208l-3.753-1.737 3.753 1.737c.467-1.028 1.49-1.712 2.728-1.712 1.704 0 3 1.296 3 3s-1.296 3-3 3-3-1.296-3-3c0-.466.097-.901.272-1.288zm.125-10.166l-4.413 3.073 4.413-3.073a2.266 2.266 0 0 1-.397-1.296c0-1.266.984-2.258 2.25-2.258a2.24 2.24 0 0 1 2.265 2.258c0 1.266-1 2.25-2.265 2.25a2.228 2.228 0 0 1-1.853-.954z"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('large') === 0 ? size : ''"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="#000"
          d="M13.951 10.308l5.866 8.058-5.866-8.058A3.01 3.01 0 0 1 12 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c0 .944-.401 1.765-1.049 2.308zM31.002 24c0 3.908-3.094 7-7.002 7s-7-3.092-7-7 3.092-6.991 7-6.991 7.002 3.083 7.002 6.991zm10.017-10c0 1.687-1.331 3-3.02 3-1.686 0-3-1.313-3-3s1.314-3.01 3-3.01A2.986 2.986 0 0 1 41.02 14zM43 31c0 2.271-1.729 4-4 4s-4-1.729-4-4 1.729-4 4-4 4 1.729 4 4zm-27.988 5.996C15.012 39.256 13.259 41 11 41c-2.258 0-4-1.745-4-4.004C7 34.738 8.742 33 11 33c2.259 0 4.012 1.738 4.012 3.996zm20.517-21.269l-5.885 4.1 5.885-4.1zm-.166 13.557l-5.005-2.317 5.005 2.317zm-21.537 4.842l5.25-5.12-5.25 5.12z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconNetworkComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconNetworkComponent],
  exports: [IconNetworkComponent]
})
export class IconNetworkModule {}
