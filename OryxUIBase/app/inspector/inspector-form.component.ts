import { Component } from 'angular2/core';
import { NgForm }    from 'angular2/common';
import { Inspector }    from './inspector';

@Component({
  selector: 'inspector-form',
  templateUrl: 'app/inspector/inspector-form.component.html'
})
export class InspectorFormComponent {
 // powers = ['Really Smart', 'Super Flexible',
    //        'Super Hot', 'Weather Changer'];
 model = new Inspector(0,' ', ' ', true);
  submitted = false;
  onSubmit() { this.submitted = true; }
  active = true;
  // TODO: Remove this when we're done
//  get diagnostic() { return JSON.stringify(this.model); }


}
