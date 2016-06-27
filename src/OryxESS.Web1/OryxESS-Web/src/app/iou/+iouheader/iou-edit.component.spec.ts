/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { IouEditComponent } from './iou-edit.component';

describe('Component: IouEdit', () => {
  it('should create an instance', () => {
    let component = new IouEditComponent();
    expect(component).toBeTruthy();
  });
});
