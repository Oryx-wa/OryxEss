/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { InspectorsService } from './inspectors.service';

describe('Inspectors Service', () => {
  beforeEachProviders(() => [InspectorsService]);

  it('should ...',
      inject([InspectorsService], (service: InspectorsService) => {
    expect(service).toBeTruthy();
  }));
});
