import {Injectable, Output, Input, EventEmitter} from '@angular/core';

@Injectable()
export class ToolbarService {
  private mode: DisplayModeEnum;

  @Input() title: string;
  @Input() showSearch: boolean = false;
  @Input() showVert: boolean = false;
  @Input() showCardorGrid: boolean = false;
  @Input() displayMode: DisplayModeEnum;

  @Output() modeChangeEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2,
  Edit = 3,
  Details = 4,
  Create = 5,
}

