import {Component, ViewChild} from '@angular/core';
import {FormBuilder, Validators, FORM_DIRECTIVES, ControlGroup} from '@angular/common';
import {Injectable,Inject} from '@angular/core';
import {Router} from '@angular/router';
import {AgentService} from './agent-form.service';

@Component({
  selector: 'add',
  	templateUrl: '/agents/add-agent-form.html',
    directives:[FORM_DIRECTIVES]

})



export class AddAgentForm{

    addAgentForm: any;


constructor(private formBuilder: FormBuilder,
              private _agentService: AgentService,
                private _router: Router) {
    }

addAgent() {
  this._agentService.addAnAgent(this.addAgentForm.value)
    .map(r => r.json())
    .subscribe(result => {
      this._router.navigate(['/agents']);
    });
}
}