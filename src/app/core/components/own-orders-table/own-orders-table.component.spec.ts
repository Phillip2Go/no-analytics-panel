import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnOrdersTableComponent } from './own-orders-table.component';

describe('OwnOrdersTableComponent', () => {
  let component: OwnOrdersTableComponent;
  let fixture: ComponentFixture<OwnOrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnOrdersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
