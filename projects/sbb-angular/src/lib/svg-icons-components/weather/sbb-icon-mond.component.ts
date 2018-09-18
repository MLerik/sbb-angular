import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-mond',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.76 14.577c-2.371.805-4.748.224-6.525-1.592C9.45 11.16 8.75 8.563 9.491 6.52l.586-1.612-1.36 1.045C6.626 7.56 5.672 9.845 6.1 12.227c.45 2.518 2.383 4.714 4.809 5.466.486.15 1.13.286 1.885.286 1.517 0 3.476-.542 5.483-2.578l1.48-1.5-1.996.676zm-6.555 2.161c-2.078-.644-3.734-2.528-4.12-4.688-.278-1.55.12-3.015 1.13-4.24-.132 2.03.701 4.234 2.306 5.875 1.556 1.59 3.514 2.367 5.567 2.237-1.57 1.028-3.258 1.318-4.883.816z"/></svg>',
  styles: []
})
export class IconMondComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
