import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsDashbordComponent } from './clients-dashbord.component';

describe('ClientsDashbordComponent', () => {
  let component: ClientsDashbordComponent;
  let fixture: ComponentFixture<ClientsDashbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsDashbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
