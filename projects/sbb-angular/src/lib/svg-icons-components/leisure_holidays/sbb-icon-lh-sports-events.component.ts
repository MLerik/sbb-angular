import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-lh-sports-events',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="#000" stroke-miterlimit="10" d="M24.5 11.157V17m-12.219 3.031l5.219 2.055m-.555 12.313l3.229-4.084m11.887 4.089l-3.235-4.09m7.883-10.283L31.5 22.086M24.5 17l-7 5.086 2.674 8.229h8.652l2.674-8.23zM9.825 34.4h7.12l2.207 6.792m-9.071-27.933l2.2 6.772-5.77 4.193m23.762-17.26L24.5 11.156l-5.773-4.194M42.488 24.23l-5.779-4.199 2.204-6.781m-9.057 27.94l2.205-6.786h7.11" vector-effect="non-scaling-stroke"/><path fill="none" stroke="#000" stroke-miterlimit="10" d="M18.727 6.963l5.773 4.194 5.773-4.194M6.5 24c0 .075.01.148.011.224l5.77-4.193-2.2-6.772m28.832-.01l-2.204 6.782 5.78 4.2c0-.078.011-.153.011-.231M19.152 41.192l-2.207-6.793h-7.12m29.347.005H32.06l-2.205 6.786" vector-effect="non-scaling-stroke"/><circle cx="24.5" cy="24" r="18" fill="none" stroke="#000" stroke-miterlimit="10" vector-effect="non-scaling-stroke"/></svg>',
  styles: []
})
export class IconLhSportsEventsComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
