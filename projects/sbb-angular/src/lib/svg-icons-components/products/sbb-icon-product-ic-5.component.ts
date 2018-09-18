import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-product-ic-5',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 20"><path d="M44.206 4.235v2.057h-4.66l-.497 2.603c.558-.591 1.273-.886 2.143-.886.854 0 1.598.229 2.231.688.939.69 1.408 1.74 1.408 3.148 0 1.382-.501 2.476-1.503 3.283-.78.633-1.714.949-2.8.949-1.224 0-2.207-.328-2.95-.985-.744-.656-1.137-1.544-1.18-2.662h2.27c.038.406.17.752.396 1.036.354.449.844.673 1.472.673.606 0 1.086-.219 1.44-.657.342-.427.513-.946.513-1.558 0-.664-.179-1.196-.537-1.594-.359-.398-.836-.597-1.432-.597-.728 0-1.295.327-1.7.98l-2.065-.031 1.1-6.447h6.351zM9.252 4.2h4.07L8.287 15.8H4.2zM16.002 4.2h14.444L28.95 7.645H18.635l-2.048 4.71h10.32L25.412 15.8H10.968l5.034-11.6z"/></svg>',
  styles: []
})
export class IconProductIc5Component {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
