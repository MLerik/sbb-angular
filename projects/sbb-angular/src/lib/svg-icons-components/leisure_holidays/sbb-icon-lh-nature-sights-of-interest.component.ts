import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-lh-nature-sights-of-interest',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path stroke-miterlimit="10" d="M17.56 20.438s-5.414-1.626-9.056.062c.356 3.909 3.602 7.046 6 9" vector-effect="non-scaling-stroke"/><path stroke-miterlimit="10" d="M13.004 28.5s-2.203.695-4.504 3c1.776 2.183 7.223 5 15.004 1m0-9.5l.031 17m-.03-9.5l-6-4m12-4.5c0-9.505-6-13.5-6-13.5s-6 3.995-6 13.5" vector-effect="non-scaling-stroke"/><path stroke-miterlimit="10" d="M29.449 20.438s5.413-1.626 9.055.062c-.356 3.909-3.601 7.046-6 9" vector-effect="non-scaling-stroke"/><path stroke-miterlimit="10" d="M34.004 28.5s2.203.695 4.504 3c-1.776 2.183-7.223 5-15.004 1m0-2l6-4" vector-effect="non-scaling-stroke"/></svg>',
  styles: []
})
export class IconLhNatureSightsOfInterestComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
