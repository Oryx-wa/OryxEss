
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import { IouHeader } from '../models/iou-header';

@Component({
  moduleId: module.id,
  selector: 'ious-card',
  templateUrl: 'ious-card.component.html',
  directives: [ROUTER_DIRECTIVES,MD_CARD_DIRECTIVES,MD_LIST_DIRECTIVES, MD_BUTTON_DIRECTIVES],
  changeDetection: ChangeDetectionStrategy.OnPush 
  
})
export class IousCardComponent implements OnInit {
  
  @Input() iouHeaders: any[] = [];

  constructor() {}

  ngOnInit() {
  }

}
