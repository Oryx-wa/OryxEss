/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { InspectorsCardComponent } from './inspectors-card.component';

describe('Component: InspectorsCard', () => {
  it('should create an instance', () => {
    let component = new InspectorsCardComponent();
    expect(component).toBeTruthy();
  });
});
