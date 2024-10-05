import { TestBed } from '@angular/core/testing';

import { ContentListServiceService } from './content-list-service.service';

describe('ContentListServiceService', () => {
  let service: ContentListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
