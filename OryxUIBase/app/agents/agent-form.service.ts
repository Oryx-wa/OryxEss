import {Component, ViewChild} from 'angular2/core';
import {Inject, Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class AgentService {
  constructor( @Inject(Http) private http: Http) {
  }

  getAllAgent(): any {
    var path = '/api/agents';
    return this.http.get(path);
  }
  
    addAnAgent(newAgent) {
  var path = '/api/agents';
  return this.http.post(path, JSON.stringify(newAgent));
}
  }
