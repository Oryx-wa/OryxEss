import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {PaginatePipe, PaginationService, PaginationControlsCmp, IPaginationInstance} from 'ng2-pagination';

export interface PagedResponse<T> {
    total: number;
    data: T[];
}


@Component({
  moduleId: module.id,
  selector: 'app-oryx-paging',
  templateUrl: 'oryx-paging.component.html',
  styleUrls: ['oryx-paging.component.css']
})
export class OryxPagingComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
