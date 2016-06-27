/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { IouCreateComponent } from './iou-create.component';

describe('Component: IouCreate', () => {
  it('should create an instance', () => {
    let component = new IouCreateComponent();
    expect(component).toBeTruthy();
  });
});
