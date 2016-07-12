System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var AgentService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            AgentService = (function () {
                function AgentService(_http) {
                    this._http = _http;
                    this._agentUrl = 'api/agent/_agent.json';
                }
                AgentService.prototype.getagents = function () {
                    return this._http.get(this._agentUrl)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                AgentService.prototype.getagent = function (id) {
                    return this.getagents()
                        .map(function (agents) { return agents.find(function (p) { return p.Id === id; }); });
                };
                AgentService.prototype.getAllAgent = function () {
                    return this.getagents();
                };
                AgentService.prototype.addAnAgent = function (newAgent) {
                    var path = 'api/agent/_agent.json';
                    console.log("Call save");
                    return this._http.post(path, JSON.stringify(newAgent));
                };
                /*      addAgent (newAgent): Observable<IAgent> {
                    let body = JSON.stringify({ newAgent });
                    let headers = new Headers({ 'Content-Type': 'agent/json' });
                    let options = new RequestOptions({ headers: headers });
                
                    return this._http.post(this._agentUrl, body, options)
                                    .map((response: Response) => <IAgent[]>response.json())
                                    .catch(this.handleError);
                  }*/
                AgentService.prototype.clone = function (object) {
                    // hack
                    return JSON.parse(JSON.stringify(object));
                };
                AgentService.prototype.handleError = function (error) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                AgentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AgentService);
                return AgentService;
            }());
            exports_1("AgentService", AgentService);
        }
    }
});
//# sourceMappingURL=agent.service.js.map