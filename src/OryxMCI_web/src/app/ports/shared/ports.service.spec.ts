/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { PortsService } from './ports.service';

describe('Ports Service', () => {
  beforeEachProviders(() => [PortsService]);

  it('should ...',
      inject([PortsService], (service: PortsService) => {
    expect(service).toBeTruthy();
  }));
});
