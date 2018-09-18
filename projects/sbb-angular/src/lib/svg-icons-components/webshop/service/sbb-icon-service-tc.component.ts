import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-tc',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 13"><path d="M.4.2h9.7l-.4 2H6.2L3.9 12.8H1.3L3.5 2.2H0m20 .5c-.6-.4-1.5-.7-2.9-.7-2.8 0-4.8 2.1-4.8 5.1 0 2.1 1.4 4 3.6 4 1.1 0 1.9-.3 2.6-.8l-.4 2.4c-.9.3-1.9.3-2.8.3-3.8 0-5.6-2.6-5.6-6 0-4.1 2.8-7 7.2-7 1.3 0 2.6.2 3.7.6L20 2.7z"/></svg>',
  styles: []
})
export class IconServiceTcComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
