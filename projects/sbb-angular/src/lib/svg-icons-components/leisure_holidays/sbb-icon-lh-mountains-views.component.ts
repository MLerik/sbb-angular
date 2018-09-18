import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-lh-mountains-views',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path stroke-miterlimit="10" d="M5.856 37.994L16 20l6.193 5.16m6.13-9.66L42 37m-22-8l7.71-13.5M15 38l4-7 5 3.5h6l3.323 3.494M23 23.5l2.5 2 3-2 3 2 2-2" vector-effect="non-scaling-stroke"/><path stroke-miterlimit="10" d="M20.328 23.606a7.5 7.5 0 1 0-9.558 5.557M25.166 11.22c-2.14 0-2.565 4.28.8 4.28h6.997c3.319 0 3.198-4.28.7-4.18 1.099-3.684-3.799-5.376-5.298-1.992-1.32-1.076-3.43-.042-3.199 1.892z" vector-effect="non-scaling-stroke"/></svg>',
  styles: []
})
export class IconLhMountainsViewsComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
