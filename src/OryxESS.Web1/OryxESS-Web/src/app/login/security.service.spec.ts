/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { SecurityService } from './security.service';

describe('Security Service', () => {
  beforeEachProviders(() => [SecurityService]);

  it('should ...',
      inject([SecurityService], (service: SecurityService) => {
    expect(service).toBeTruthy();
  }));
});
