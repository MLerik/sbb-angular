import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sbb-input-field-showcase-documentation-getting-started',
  templateUrl: './documentation-getting-started-input-field.component.html',
  styleUrls: ['./documentation-getting-started-input-field.component.scss']
})
export class DocumentationGettingStartedInputFieldComponent implements OnInit {

  gettingStartedText = '<b>input</b> is used as follows :';

  options = { theme: 'default', language: 'html', readOnly: true, automaticLayout: true };

  // tslint:disable-next-line
  codeGettingStarted = `<input type="text|password|number|file|email|datetime|datetime-local" placeholder="Placeholder" disabled="true|false" autocomplete="on|off" ...>`;

  constructor() {
  }

  ngOnInit() {
  }

}
