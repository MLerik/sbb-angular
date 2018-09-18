import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-exclamation-mark',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 15v2h2v-2h-1m0-8h-1v6h2V7"/></svg>',
  styles: []
})
export class IconExclamationMarkComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
