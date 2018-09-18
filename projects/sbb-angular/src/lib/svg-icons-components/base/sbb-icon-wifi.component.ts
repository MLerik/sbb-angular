import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-wifi',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 16.9c0 .6.5 1 1 1 .6 0 1-.5 1-1s-.5-1-1-1c-.6 0-1 .4-1 1m1.1 0s-.1.1 0 0c-.1.1-.1 0-.1 0-.1-.1-.1-.1.1 0-.1-.1 0-.1 0 0m4.3-4.5c.1 0 .3-.1.4-.2.2-.2.2-.6 0-.8-1.3-1.2-3-1.9-4.8-1.9s-3.5.7-4.8 1.8c-.2.3-.2.7 0 .9.2.2.5.2.8 0 1.1-1 2.5-1.6 4-1.6s3 .6 4.1 1.6c.1.1.2.2.3.2m-2 2.4c.1 0 .3-.1.4-.2.2-.2.2-.6 0-.8-.8-.6-1.8-1-2.8-1s-2 .4-2.7 1.1c-.3.1-.3.5-.1.7.2.2.5.2.8 0 .6-.5 1.3-.8 2-.8.8 0 1.5.3 2 .8.1.2.3.2.4.2m4.6-4.6c.1 0 .3-.1.4-.2.2-.2.2-.6 0-.8-2-1.9-4.6-2.9-7.3-2.9s-5.3 1-7.3 2.8c-.2.2-.2.5 0 .8.2.2.5.2.8 0C7.2 8.4 9.5 7.5 12 7.5s4.8.9 6.6 2.6c.1 0 .2.1.4.1"/></svg>',
  styles: []
})
export class IconWifiComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
