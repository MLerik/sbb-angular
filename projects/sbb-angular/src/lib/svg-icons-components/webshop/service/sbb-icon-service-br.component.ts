import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-br',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 13"><path d="M4.1 5.3h1c1.3 0 2.8-.4 2.8-1.9C7.9 2.1 6.7 2 5.7 2h-.9l-.7 3.3zM2.9 11h.9c1.6 0 3.4-.2 3.4-2.2 0-1.4-1.3-1.6-2.7-1.6h-.8L2.9 11zM2.7 0h3.9c2 0 3.9.7 3.9 3.1 0 1.6-1.3 2.8-2.8 3.1 1.5.3 2.1 1.4 2.1 2.8 0 3.7-4.2 4-6.1 4H0L2.7 0zm12.9 5.6h.9c1.4 0 3.1-.4 3.1-2.1C19.6 2 18.5 2 17.4 2h-1.1l-.7 3.6zM14.1 0h3.1c2.4 0 5.2 0 5.2 3.1 0 2.2-1.7 3.4-3.8 3.5.7 0 1.2.5 1.3 1.2l1.2 5.2h-2.7l-.6-3.1c-.3-1.4-.2-2.3-1.6-2.3h-1L14 13h-2.6l2.7-13z"/></svg>',
  styles: []
})
export class IconServiceBrComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
