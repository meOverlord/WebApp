import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NullableTableRowComponent } from './nullable-table-row.component';

describe('NullableTableRowComponent', () => {
  let component: NullableTableRowComponent;
  let fixture: ComponentFixture<NullableTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NullableTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NullableTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
