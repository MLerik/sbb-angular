import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-xt',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 13"><path d="M6 0l1.9 4.5L11.5 0h3.1L9.2 6.2l3 6.8H9.3l-2-5.2L3.2 13H0l6-7.1L3.2 0m12 0l-.4 2h3.7l-2.4 11h2.7l2.4-11h3.7l.4-2"/></svg>',
  styles: []
})
export class IconServiceXtComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
