import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-realtime-add-stop',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.699 13.307c-.285.077-.578.13-.886.13-.347 0-.674-.066-.99-.162-1.41-.428-2.448-1.725-2.448-3.275 0-1.549 1.037-2.848 2.449-3.275.315-.095.642-.162.989-.162.308 0 .6.053.886.13 1.465.395 2.551 1.72 2.551 3.307 0 1.588-1.086 2.914-2.551 3.307m0-8.53V0H8.824v4.787C6.366 5.254 4.5 7.41 4.5 10c0 2.591 1.866 4.748 4.324 5.213V20h1.875v-4.776c2.507-.425 4.426-2.598 4.426-5.224 0-2.625-1.919-4.798-4.426-5.223"/></svg>',
  styles: []
})
export class IconRealtimeAddStopComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
