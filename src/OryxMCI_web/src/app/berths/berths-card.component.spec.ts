/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BerthsCardComponent } from './berths-card.component';

describe('Component: BerthsCard', () => {
  it('should create an instance', () => {
    let component = new BerthsCardComponent();
    expect(component).toBeTruthy();
  });
});
