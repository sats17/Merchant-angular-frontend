import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantOperationsComponent } from './merchant-operations.component';

describe('MerchantOperationsComponent', () => {
  let component: MerchantOperationsComponent;
  let fixture: ComponentFixture<MerchantOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
