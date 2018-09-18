import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-kamera-203',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.857 7l-.997-3H9.14l-1 3H5V6H2v14h20V7h-6.143zM9.86 5h4.28l.663 2h-5.61l.667-2zM21 19H3V8h18v11z"/><path d="M12 17.5c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-7c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"/></svg>',
  styles: []
})
export class IconKamera203Component {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
