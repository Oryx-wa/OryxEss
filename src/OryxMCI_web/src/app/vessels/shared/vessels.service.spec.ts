/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { VesselsService } from './vessels.service';

describe('Vessels Service', () => {
  beforeEachProviders(() => [VesselsService]);

  it('should ...',
      inject([VesselsService], (service: VesselsService) => {
    expect(service).toBeTruthy();
  }));
});
