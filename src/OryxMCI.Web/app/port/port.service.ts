import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IPort } from './port';

@Injectable()
export class PortService {
    private _portUrl = 'api/port/port.json';

    constructor(private _http: Http) { }

    getPorts(): Observable<IPort[]> {
        return this._http.get(this._portUrl)
            .map((response: Response) => <IPort[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPort(id: number): Observable<IPort> {
        return this.getPorts()
            .map((ports: IPort[]) => ports.find(p => p.Id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
