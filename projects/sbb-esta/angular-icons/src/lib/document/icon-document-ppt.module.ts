/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-document-ppt',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M6.509 4.5h5.99l5 5v10h-11l.01-15zm5.991 0v5h5"
          />
          <path
            fill="#000"
            d="M8.668 15.556v.85h.597c.176 0 .304-.033.382-.094.097-.076.145-.189.145-.338 0-.15-.056-.263-.167-.336-.081-.055-.213-.082-.396-.082h-.561zM8 15.002h1.235c.208 0 .371.013.491.037a.951.951 0 0 1 .324.135c.266.175.4.44.4.792 0 .313-.111.56-.331.738a.876.876 0 0 1-.321.165c-.12.034-.268.05-.443.05h-.687V18H8v-2.998zm3.484.554v.85h.597c.176 0 .304-.033.382-.094.097-.076.145-.189.145-.338 0-.15-.056-.263-.167-.336-.081-.055-.213-.082-.396-.082h-.561zm-.668-.554h1.235c.208 0 .37.013.49.037a.951.951 0 0 1 .325.135c.266.175.4.44.4.792 0 .313-.111.56-.331.738a.876.876 0 0 1-.321.165c-.12.034-.268.05-.443.05h-.687V18h-.668v-2.998zm5.184 0v.555h-.93V18h-.668v-2.444h-.925v-.554H16z"
          />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M9.763 6.75h8.987l7.5 7.5v15H9.75l.013-22.5zm8.987 0v7.5h7.5"
          />
          <path
            fill="#000"
            d="M13.002 23.335v1.273h.896c.264 0 .456-.048.572-.14.146-.113.218-.283.218-.506 0-.225-.084-.395-.25-.504-.122-.083-.32-.123-.595-.123h-.841zM12 22.504h1.852c.313 0 .557.02.737.055.178.04.34.107.486.203.399.262.6.658.6 1.188 0 .47-.167.838-.497 1.107a1.313 1.313 0 0 1-.481.247 2.48 2.48 0 0 1-.664.075h-1.031v1.622H12v-4.497zm5.226.83v1.274h.895c.264 0 .456-.048.573-.14.146-.113.218-.283.218-.506 0-.225-.084-.395-.25-.504-.122-.083-.32-.123-.595-.123h-.841zm-1.002-.83h1.852c.312 0 .557.02.737.055.178.04.34.107.486.203.399.262.6.658.6 1.188 0 .47-.167.838-.497 1.107a1.313 1.313 0 0 1-.481.247 2.48 2.48 0 0 1-.665.075h-1.03v1.622h-1.002v-4.497zm7.776 0v.831h-1.395v3.666h-1.002v-3.666h-1.388v-.831H24z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconDocumentPptComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconDocumentPptComponent],
  exports: [IconDocumentPptComponent]
})
export class IconDocumentPptModule {}
