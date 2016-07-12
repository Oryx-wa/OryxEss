import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IAgent } from './agent';

@Injectable()
export class AgentService {
    private _agentUrl = 'api/agent/_agent.json';

    constructor(private _http: Http) { }

    getagents(): Observable<IAgent[]> {
        return this._http.get(this._agentUrl)
            .map((response: Response) => <IAgent[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getagent(id: number): Observable<IAgent> {
        return this.getagents()
            .map((agents: IAgent[]) => agents.find(p => p.Id === id));
    }

    getAllAgent(): any {
        return this.getagents();
    }

    addAnAgent(newAgent){
              var path = 'api/agent/_agent.json';
                console.log("Call save");
        return this._http.post(path, JSON.stringify(newAgent));
    }

/*      addAgent (newAgent): Observable<IAgent> {
    let body = JSON.stringify({ newAgent });
    let headers = new Headers({ 'Content-Type': 'agent/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this._agentUrl, body, options)
                    .map((response: Response) => <IAgent[]>response.json())
                    .catch(this.handleError);
  }*/



   private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
