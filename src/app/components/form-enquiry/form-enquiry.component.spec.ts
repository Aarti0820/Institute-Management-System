import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnquiryComponent } from './form-enquiry.component';

describe('FormEnquiryComponent', () => {
  let component: FormEnquiryComponent;
  let fixture: ComponentFixture<FormEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEnquiryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
