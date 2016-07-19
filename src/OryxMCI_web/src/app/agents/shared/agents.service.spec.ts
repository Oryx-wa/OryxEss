/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AgentsService } from './agents.service';

describe('Agents Service', () => {
  beforeEachProviders(() => [AgentsService]);

  it('should ...',
      inject([AgentsService], (service: AgentsService) => {
    expect(service).toBeTruthy();
  }));
});
