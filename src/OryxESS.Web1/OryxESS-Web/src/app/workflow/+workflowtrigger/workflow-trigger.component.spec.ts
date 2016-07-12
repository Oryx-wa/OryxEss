import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { WorkflowTriggerComponent } from './workflow-trigger.component';

describe('Component: WorkflowTrigger', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [WorkflowTriggerComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([WorkflowTriggerComponent],
      (component: WorkflowTriggerComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(WorkflowTriggerComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(WorkflowTriggerComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-workflow-trigger></app-workflow-trigger>
  `,
  directives: [WorkflowTriggerComponent]
})
class WorkflowTriggerComponentTestController {
}

