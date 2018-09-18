import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-product-ic-4',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 20"><path d="M44.886 11.204v1.954h-1.455V15.8h-2.254v-2.642H36.35v-2.167l4.944-6.756h2.136v6.97h1.455zm-3.662.024V6.925l-2.974 4.303h2.974zM9.252 4.2h4.07L8.287 15.8H4.2zM16.002 4.2h14.444L28.95 7.645H18.635l-2.048 4.71h10.32L25.412 15.8H10.968l5.034-11.6z"/></svg>',
  styles: []
})
export class IconProductIc4Component {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
