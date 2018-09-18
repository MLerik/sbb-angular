import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-realtime-cancellation',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 14.082l-3-3-3 3-1.081-1.083 3-2.998-3-3 1.08-1.082 3 2.999 3-2.999 1.082 1.082-2.999 3 3 2.998L13 14.082z"/><path d="M9.992 2.5C5.853 2.5 2.5 5.86 2.5 10c0 4.14 3.353 7.5 7.492 7.5 4.148 0 7.508-3.36 7.508-7.5 0-4.14-3.36-7.5-7.508-7.5zM10 16c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"/></svg>',
  styles: []
})
export class IconRealtimeCancellationComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
