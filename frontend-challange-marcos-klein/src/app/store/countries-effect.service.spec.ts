import { TestBed } from '@angular/core/testing';

import { CountriesEffectService } from './countries-effect.service';

describe('CountriesEffectService', () => {
  let service: CountriesEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
