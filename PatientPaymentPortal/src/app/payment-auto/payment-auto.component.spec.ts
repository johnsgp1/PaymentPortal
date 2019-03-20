import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAutoComponent } from './payment-auto.component';

describe('PaymentAutoComponent', () => {
  let component: PaymentAutoComponent;
  let fixture: ComponentFixture<PaymentAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
