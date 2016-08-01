import { Component, OnInit } from '@angular/core';
//3rd Party imports
//import {MaterializeDirective} from "angular2-materialize";
import {CSSCarouselComponent} from './carousel.component';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives:[CSSCarouselComponent]
})
export class HomeComponent implements OnInit {
  public pageTitle: string = "Welcome";
  constructor() {}

  ngOnInit() {
  }

}
