import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IInspector } from './inspector';

@Injectable()
export class InspectorService {
    private _inspectorUrl = 'api/inspector/inspector.json';

    constructor(private _http: Http) { }

    getInspectors(): Observable<IInspector[]> {
        return this._http.get(this._inspectorUrl)
            .map((response: Response) => <IInspector[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getInspector(id: number): Observable<IInspector> {
        return this.getInspectors()
            .map((inspectors: IInspector[]) => inspectors.find(p => p.Id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
