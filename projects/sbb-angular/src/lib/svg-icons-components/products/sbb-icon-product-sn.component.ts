import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-product-sn',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 20"><path d="M4.2 11.949c-.032 2.86 2.373 4.127 4.94 4.127 3.152 0 4.826-1.593 4.826-3.721 0-2.632-2.6-3.168-3.445-3.38-2.909-.747-3.461-.86-3.461-1.755 0-.974.942-1.316 1.755-1.316 1.218 0 2.21.358 2.29 1.755h2.47c0-2.68-2.225-3.737-4.646-3.737-2.096 0-4.339 1.137-4.339 3.51 0 2.177 1.739 2.843 3.461 3.298 1.706.455 3.445.666 3.445 1.917 0 1.187-1.365 1.447-2.259 1.447-1.365 0-2.567-.602-2.567-2.145H4.2zm11.16 3.85h2.39V8.034h.032l4.825 7.767h2.551V4.198H22.77v7.783h-.033l-4.842-7.783h-2.534V15.8z"/></svg>',
  styles: []
})
export class IconProductSnComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
