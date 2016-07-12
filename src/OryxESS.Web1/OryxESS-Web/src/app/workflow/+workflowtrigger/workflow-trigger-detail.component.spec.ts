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
import { WorkflowTriggerDetailComponent } from './workflow-trigger-detail.component';

describe('Component: WorkflowTriggerDetail', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [WorkflowTriggerDetailComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([WorkflowTriggerDetailComponent],
      (component: WorkflowTriggerDetailComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(WorkflowTriggerDetailComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(WorkflowTriggerDetailComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-workflow-trigger-detail></app-workflow-trigger-detail>
  `,
  directives: [WorkflowTriggerDetailComponent]
})
class WorkflowTriggerDetailComponentTestController {
}

