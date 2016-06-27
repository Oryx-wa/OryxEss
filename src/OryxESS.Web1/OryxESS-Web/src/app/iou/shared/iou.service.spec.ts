import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { IouService } from './iou.service';

describe('Iou Service', () => {
  beforeEachProviders(() => [IouService]);

  it('should ...',
      inject([IouService], (service: IouService) => {
    expect(service).toBeTruthy();
  }));
});
