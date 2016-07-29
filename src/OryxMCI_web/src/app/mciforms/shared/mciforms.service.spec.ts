/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MciFormsService } from './mciforms.service';

describe('MciForms Service', () => {
  beforeEachProviders(() => [MciFormsService]);

  it('should ...',
      inject([MciFormsService], (service: MciFormsService) => {
    expect(service).toBeTruthy();
  }));
});
