import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteOptionListComponent } from './autocomplete-option-list.component';
import { AutocompleteOptionComponent } from '../autocomplete-option/autocomplete-option.component';
import { FilterPipe } from './autocomplete-filter.pipe';

describe('AutocompleteOptionListComponent', () => {
  let component: AutocompleteOptionListComponent;
  let fixture: ComponentFixture<AutocompleteOptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteOptionListComponent, AutocompleteOptionComponent, FilterPipe ],
      providers: [FilterPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteOptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
