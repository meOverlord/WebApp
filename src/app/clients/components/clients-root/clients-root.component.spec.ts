import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsRootComponent } from './clients-root.component';

describe('ClientsRootComponent', () => {
  let component: ClientsRootComponent;
  let fixture: ComponentFixture<ClientsRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
