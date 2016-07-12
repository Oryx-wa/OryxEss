import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {IouPayment} from './iou-payment';

describe('IouPayment', () => {
  it('should create an instance', () => {
    expect(new IouPayment()).toBeTruthy();
  });
});
