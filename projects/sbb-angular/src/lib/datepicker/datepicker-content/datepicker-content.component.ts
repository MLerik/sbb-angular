import { Component, AfterViewInit, ViewChild, ViewEncapsulation, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { DatepickerEmbeddableComponent } from '../datepicker-embeddable/datepicker-embeddable.component';
import { CalendarComponent } from '../calendar/calendar.component';

/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * SbbCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
@Component({
  selector: 'sbb-datepicker-content',
  templateUrl: 'datepicker-content.component.html',
  styleUrls: ['datepicker-content.component.scss'],
  exportAs: 'sbbDatepickerContent',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerContentComponent<D> implements AfterViewInit {

  @HostBinding('class') cssClass = 'sbb-datepicker-content';

  /** Reference to the internal calendar component. */
  @ViewChild(CalendarComponent) calendar: CalendarComponent<D>;

  /** Reference to the datepicker that created the overlay. */
  datepicker: DatepickerEmbeddableComponent<D>;

  /** Whether the datepicker is above or below the input. */
  isAbove: boolean;

  ngAfterViewInit() {
    this.calendar.focusActiveCell();
  }
}