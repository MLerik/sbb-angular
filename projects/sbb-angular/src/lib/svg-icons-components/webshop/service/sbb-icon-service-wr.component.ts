import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-wr',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 13"><path d="M3.6 8.2l-1.8-2-.8-1C.6 4.6.4 4 .4 3.2c0-1 .4-2 1.1-2.9l.2-.2.1-.1 4.5 5.1V3.2L9.8 0l.8.9-3.1 2.8v1.5l3.8-3.5.8.9-3.8 3.5 1.5.1 3.1-2.8.8.9-3.5 3.2-2-.1 3.8 4.3-1.5 1.3-4-4.5-.1-.3v.3l-5 4.5L0 11.5l3.6-3.3zM1.9 2.3c-.1.1-.1.3-.1.4v.4c0 .6.2 1.2.7 1.7l.5.5 1.7 1.9 1-.9-3.7-4-.1-.3v.3z"/></svg>',
  styles: []
})
export class IconServiceWrComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
