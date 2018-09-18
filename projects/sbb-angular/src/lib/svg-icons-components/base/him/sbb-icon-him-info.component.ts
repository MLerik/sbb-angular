import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-him-info',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.3 4.85c0-1 .8-1.9 1.9-1.9 1 0 1.8.8 1.8 1.9 0 1-.8 1.8-1.8 1.8-1.1 0-1.9-.8-1.9-1.8zm-1.1 11.4h1.2v-8H7.2c-.2 0-.3-.1-.3-.3s.1-.4.3-.4h4.5v8.7h1.1c.2 0 .4.2.4.4s-.2.4-.4.4H7.2c-.2 0-.4-.199-.4-.399s.2-.401.4-.401z"/></svg>',
  styles: []
})
export class IconHimInfoComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
