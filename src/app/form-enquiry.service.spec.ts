import { TestBed } from '@angular/core/testing';

import { FormEnquiryService } from './form-enquiry.service';

describe('FormEnquiryService', () => {
  let service: FormEnquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormEnquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
