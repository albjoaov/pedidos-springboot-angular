import { TestBed } from '@angular/core/testing';

import { PratoService } from './prato.service';

describe('PratoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PratoService = TestBed.get(PratoService);
    expect(service).toBeTruthy();
  });
});
