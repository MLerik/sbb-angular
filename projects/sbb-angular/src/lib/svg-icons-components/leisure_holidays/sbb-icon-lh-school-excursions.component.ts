import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-lh-school-excursions',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="#000" stroke-miterlimit="10" d="M25.501 34.5l1-9h6l1 9" vector-effect="non-scaling-stroke"/><circle cx="9.5" cy="12.5" r="2" fill="none" stroke="#000" stroke-miterlimit="10" vector-effect="non-scaling-stroke"/><path fill="none" stroke="#000" stroke-miterlimit="10" d="M7.5 27.5V40m4-12.5V40m-6-10.5v-12h8v12m-8-2h8" vector-effect="non-scaling-stroke"/><circle cx="29.501" cy="20.5" r="2" fill="none" stroke="#000" stroke-miterlimit="10" vector-effect="non-scaling-stroke"/><path fill="none" stroke="#000" stroke-miterlimit="10" d="M27.501 32.5V40m4-7.5V40m-5.778-7.5h7.556m2.223 2l1-9h6l1 9" vector-effect="non-scaling-stroke"/><circle cx="39.502" cy="20.5" r="2" fill="none" stroke="#000" stroke-miterlimit="10" vector-effect="non-scaling-stroke"/><path fill="none" stroke="#000" stroke-miterlimit="10" d="M37.502 32.5V40m4-7.5V40m-5.778-7.5h7.556m-27.78 2l1-9h6l1 9" vector-effect="non-scaling-stroke"/><circle cx="19.501" cy="20.5" r="2" fill="none" stroke="#000" stroke-miterlimit="10" vector-effect="non-scaling-stroke"/><path fill="none" stroke="#000" stroke-miterlimit="10" d="M17.5 32.5V40m4.001-7.5V40m-5.778-7.5h7.555" vector-effect="non-scaling-stroke"/></svg>',
  styles: []
})
export class IconLhSchoolExcursionsComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
