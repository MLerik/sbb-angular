import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-send',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.086 3.636L1.59 13.163l8.91 2.227v6.548l2.634-4.8 5.28 3.772 1.672-17.274zm-2.47 2.397l-6.826 8.432-6.381-1.628 13.207-6.804zM11.5 18.038V15.97l.815.582-.815 1.485zm.223-3.137l7.12-8.794-1.257 12.983-5.863-4.189z"/></svg>',
  styles: []
})
export class IconSendComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
