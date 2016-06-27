import { Component, OnInit } from '@angular/core';
import { Router,  ROUTER_DIRECTIVES } from '@angular/router';
import {DisplayModeEnum} from '../../shared/shared-enum.enum'

@Component({
  moduleId: module.id,
  selector: 'app-iou',
  templateUrl: 'iou.component.html',
  directives: [ ROUTER_DIRECTIVES]
})
export class IouComponent implements OnInit {

  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  constructor(private router: Router) { }

  ngOnInit() {
      //Next line needs a better technique. This is the easiest way
      //to get child route path that I've found so far.
      //Hoping this will be easier with later builds of router
      const path = this.router.url.split('/')[3];
      switch (path) {
        case 'details':
          this.displayMode = DisplayModeEnum.Details;
          break;
        case 'create':
          this.displayMode = DisplayModeEnum.Create;
          break;
        case 'edit':
          this.displayMode = DisplayModeEnum.Edit;
          break;
      }

  }
}
