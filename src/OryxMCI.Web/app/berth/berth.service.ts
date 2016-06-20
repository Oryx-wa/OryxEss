import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IBerth } from './berth';

@Injectable()
export class BerthService {
    private _berthUrl = 'api/berth/berth.json';

    constructor(private _http: Http) { }

    getBerths(): Observable<IBerth[]> {
        return this._http.get(this._berthUrl)
            .map((response: Response) => <IBerth[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getBerth(id: number): Observable<IBerth> {
        return this.getBerths()
            .map((berths: IBerth[]) => berths.find(p => p.Id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

