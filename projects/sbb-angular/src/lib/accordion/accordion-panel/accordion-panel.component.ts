/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { AnimationEvent } from '@angular/animations';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  SimpleChanges,
  SkipSelf,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { Subject } from 'rxjs';
import { filter, startWith, take } from 'rxjs/operators';
import { sbbExpansionAnimations } from '../accordion/accordion-animations';
import { SbbExpansionPanelContent } from './accordion-panel-content';
import { SBB_ACCORDION, SbbAccordionBase } from '../accordion/accordion-base';

// TODO(devversion): workaround for https://github.com/angular/material2/issues/12760
export const _CdkAccordionItem = CdkAccordionItem;

/** MatExpansionPanel's states. */
export type SbbExpansionPanelState = 'expanded' | 'collapsed';

/** Counter for generating unique element ids. */
let uniqueId = 0;

/**
 * `<mat-expansion-panel>`
 *
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the MatAccordion directive attached.
 */
@Component({
  styleUrls: ['./accordion-panel.component.scss'],
  selector: 'sbb-expansion-panel',
  exportAs: 'matExpansionPanel',
  templateUrl: './accordion-panel.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['disabled', 'expanded'],
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ['opened', 'closed', 'expandedChange'],
  animations: [sbbExpansionAnimations.bodyExpansion],
  providers: [
    // Provide MatAccordion as undefined to prevent nested expansion panels from registering
    // to the same accordion.
    { provide: SBB_ACCORDION, useValue: undefined },
  ],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    'class': 'sbb-expansion-panel',
    '[class.sbb-expanded]': 'expanded',
    '[class.sbb-expansion-panel-spacing]': '_hasSpacing()',
  }
})
// tslint:disable-next-line:component-class-suffix
export class SbbExpansionPanel extends CdkAccordionItem implements AfterContentInit, OnChanges,
  OnDestroy {

  // @breaking-change 8.0.0 Remove `| undefined` from here
  // when the `_document` constructor param is required.
  private _document: Document | undefined;

  /** Whether the toggle indicator should be hidden. */
  @Input()
  get hideToggle(): boolean {
    return this._hideToggle || (this.accordion && this.accordion.hideToggle);
  }
  set hideToggle(value: boolean) {
    this._hideToggle = coerceBooleanProperty(value);
  }
  private _hideToggle = false;

  /** Stream that emits for changes in `@Input` properties. */
  readonly _inputChanges = new Subject<SimpleChanges>();

  /** Optionally defined accordion the expansion panel belongs to. */
  accordion: SbbAccordionBase;

  /** Content that will be rendered lazily. */
  @ContentChild(SbbExpansionPanelContent) _lazyContent: SbbExpansionPanelContent;

  /** Element containing the panel's user-provided content. */
  @ViewChild('body') _body: ElementRef<HTMLElement>;

  /** Portal holding the user's content. */
  _portal: TemplatePortal;

  /** ID for the associated header element. Used for a11y labelling. */
  _headerId = `sbb-expansion-panel-header-${uniqueId++}`;

  constructor(@Optional() @SkipSelf() @Inject(SBB_ACCORDION) accordion: SbbAccordionBase,
    _changeDetectorRef: ChangeDetectorRef,
    _uniqueSelectionDispatcher: UniqueSelectionDispatcher,
    private _viewContainerRef: ViewContainerRef,
    @Inject(DOCUMENT) _document?: any) {
    super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
    this.accordion = accordion;
    this._document = _document;
  }

  /** Determines whether the expansion panel should have spacing between it and its siblings. */
  _hasSpacing(): boolean {
    if (this.accordion) {
      // We don't need to subscribe to the `stateChanges` of the parent accordion because each time
      // the [displayMode] input changes, the change detection will also cover the host bindings
      // of this expansion panel.
      return (this.expanded ? this.accordion.displayMode : this._getExpandedState()) === 'default';
    }
    return false;
  }

  /** Gets the expanded state string. */
  _getExpandedState(): SbbExpansionPanelState {
    return this.expanded ? 'expanded' : 'collapsed';
  }

  ngAfterContentInit() {
    if (this._lazyContent) {
      // Render the content as soon as the panel becomes open.
      this.opened.pipe(
        // tslint:disable-next-line:no-non-null-assertion
        startWith(null!),
        filter(() => this.expanded && !this._portal),
        take(1)
      ).subscribe(() => {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this._inputChanges.next(changes);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this._inputChanges.complete();
  }

  _bodyAnimation(event: AnimationEvent) {
    const classList = event.element.classList;
    const cssClass = 'sbb-expanded';
    const { phaseName, toState } = event;

    // Toggle the body's `overflow: hidden` class when closing starts or when expansion ends in
    // order to prevent the cases where switching too early would cause the animation to jump.
    // Note that we do it directly on the DOM element to avoid the slight delay that comes
    // with doing it via change detection.
    if (phaseName === 'done' && toState === 'expanded') {
      classList.add(cssClass);
    } else if (phaseName === 'start' && toState === 'collapsed') {
      classList.remove(cssClass);
    }
  }

  /** Checks whether the expansion panel's content contains the currently-focused element. */
  _containsFocus(): boolean {
    if (this._body && this._document) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this._body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }

    return false;
  }
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'sbb-action-row',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    class: 'sbb-action-row'
  }
})
// tslint:disable-next-line:directive-class-suffix
export class SbbExpansionPanelActionRow { }