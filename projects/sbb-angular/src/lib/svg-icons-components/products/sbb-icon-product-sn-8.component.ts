import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-product-sn-8',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 20"><path d="M4.2 11.949c-.032 2.86 2.373 4.127 4.94 4.127 3.152 0 4.826-1.593 4.826-3.721 0-2.632-2.6-3.168-3.445-3.38-2.909-.747-3.461-.86-3.461-1.755 0-.974.942-1.316 1.755-1.316 1.218 0 2.21.358 2.29 1.755h2.47c0-2.68-2.225-3.737-4.646-3.737-2.096 0-4.339 1.137-4.339 3.51 0 2.177 1.739 2.843 3.461 3.298 1.706.455 3.445.666 3.445 1.917 0 1.187-1.365 1.447-2.259 1.447-1.365 0-2.567-.602-2.567-2.145H4.2zm11.16 3.85h2.39V8.034h.032l4.825 7.767h2.551V4.198H22.77v7.783h-.033l-4.842-7.783h-2.534V15.8zM34.212 9.573c-.538-.185-.95-.488-1.238-.91-.288-.422-.431-.933-.431-1.534 0-1.002.411-1.801 1.234-2.397.728-.527 1.592-.791 2.594-.791 1.14 0 2.07.314 2.793.941.685.59 1.028 1.321 1.028 2.191 0 .607-.145 1.126-.435 1.559s-.702.746-1.234.94c.416.122.757.278 1.02.468.733.532 1.1 1.31 1.1 2.333 0 1.176-.451 2.112-1.353 2.808-.76.586-1.735.878-2.927.878-1.292 0-2.32-.321-3.084-.965-.797-.67-1.195-1.548-1.195-2.634 0-1.018.353-1.806 1.06-2.365a2.924 2.924 0 0 1 1.068-.522zm2.112.87c-.57 0-1.035.175-1.396.526-.362.35-.542.8-.542 1.349 0 .564.183 1.023.55 1.376s.842.53 1.427.53c.665 0 1.163-.195 1.495-.585.322-.375.483-.807.483-1.298 0-.558-.185-1.017-.554-1.376-.353-.348-.84-.522-1.463-.522zm.016-4.706c-.507 0-.915.14-1.226.423-.312.282-.467.652-.467 1.111 0 .48.157.864.47 1.151.314.287.735.431 1.262.431s.944-.142 1.25-.427c.306-.285.459-.672.459-1.163 0-.48-.154-.854-.463-1.123-.308-.27-.737-.403-1.285-.403z"/></svg>',
  styles: []
})
export class IconProductSn8Component {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
