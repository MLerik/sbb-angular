import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-trainformation-1-class',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25"><path d="M14.324 6.8h-1.808c-.24 1.712-1.696 2.256-3.28 2.224v1.712h2.816V18h2.272V6.8z"/></svg>',
  styles: []
})
export class IconTrainformation1ClassComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
