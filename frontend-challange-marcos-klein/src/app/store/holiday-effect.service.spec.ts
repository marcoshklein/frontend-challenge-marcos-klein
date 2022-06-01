import { TestBed } from '@angular/core/testing';

import { HolidayEffectService } from './holiday-effect.service';

describe('HolidayEffectService', () => {
  let service: HolidayEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidayEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
