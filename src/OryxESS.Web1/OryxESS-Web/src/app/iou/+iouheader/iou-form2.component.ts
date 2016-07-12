import { Component, OnInit , Input} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';

import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { IouService } from '../shared/iou.service';
import { AuthGuard }             from '../../login/auth.guard';
import { IouHeader } from '../models/iou-header';

import {SecurityService} from '../../login/security.service';
import {DisplayModeEnum} from '../../shared/shared-enum.enum';

@Component({
 
  moduleId: module.id,
  selector: 'iou-form2',
  templateUrl: 'iou-form2.component.html',
  directives: [  ROUTER_DIRECTIVES,REACTIVE_FORM_DIRECTIVES,MD_INPUT_DIRECTIVES,MD_BUTTON_DIRECTIVES]
})
export class IouForm2Component implements OnInit {
  iouForm: FormGroup;
  active = true;
  edit = false;
  submitted: boolean = false;

  model: IouHeader;
  @Input() mode: string;
  
  projects = ['P001', 'P002',
            'P003', 'P004'];

   constructor(private formBuilder: FormBuilder,
            private router: Router, private route: ActivatedRoute, private _iouHeaderService: IouService,
     public securityService: SecurityService ) { }

  ngOnInit() {
     const id = +this.router.routerState.parent(this.route).snapshot.params['id'];
        this.model = new IouHeader();
        this.getData(id);
        this.edit = false;
        console.log(id)

     this.iouForm = this.formBuilder.group({
        id:     [this.model.iouId, Validators.required],
        docDate: [this.model.docDate, Validators.required],
        dueDate: [this.model.dueDate, Validators.required],
        requestAmount:    [this.model.requestAmount, [Validators.required]],
        projectCode:    [this.model.projectCode, Validators.required],
        comments:    [this.model.comments, Validators.required]
      });


  }
   private getData(id: number) {
        if(id == -1){          
          this.mode = "New"
        }
        else{
           console.log('iou :getData starting...');
          this._iouHeaderService
            .GetById(id)
            .subscribe(data => this.model = data,
            error => this.securityService.HandleError(error),
            () => console.log('Get id completed'));
            this.mode = "View"
          console.log("id completed successfully");
        }
   }

     onSubmit() { this.submitted = true; }
   

    newiouHeader() {
    this.model = new IouHeader();
    this.active = false;
    setTimeout(() => this.active = true, 0);
    this.mode = "New";
    }

    cancel(){
      this.router.navigate(['/iou'])
    }

}
