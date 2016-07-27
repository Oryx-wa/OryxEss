/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { BerthsService } from './berths.service';

describe('Berths Service', () => {
  beforeEachProviders(() => [BerthsService]);

  it('should ...',
      inject([BerthsService], (service: BerthsService) => {
    expect(service).toBeTruthy();
  }));
});
