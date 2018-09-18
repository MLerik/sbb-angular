import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-xing',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.6 21l-4-7.1L16.8 3H21l-6.2 10.9 4 7.1h-4.2zM8 15.6l3.1-5.1-2.4-4.2h-4L7 10.4l-3 5.2h4zm0 0"/></svg>',
  styles: []
})
export class IconXingComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
