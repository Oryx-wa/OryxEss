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
import { WorkflowTriggerListComponent } from './workflow-trigger-list.component';

describe('Component: WorkflowTriggerList', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [WorkflowTriggerListComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([WorkflowTriggerListComponent],
      (component: WorkflowTriggerListComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(WorkflowTriggerListComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(WorkflowTriggerListComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-workflow-trigger-list></app-workflow-trigger-list>
  `,
  directives: [WorkflowTriggerListComponent]
})
class WorkflowTriggerListComponentTestController {
}

