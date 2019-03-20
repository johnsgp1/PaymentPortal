import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentNowComponent } from './payment-now.component';

describe('PaymentNowComponent', () => {
  let component: PaymentNowComponent;
  let fixture: ComponentFixture<PaymentNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
