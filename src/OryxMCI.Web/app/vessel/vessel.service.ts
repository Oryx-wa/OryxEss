import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IVessel } from './vessel';

@Injectable()
export class VesselService {
    private _vesselUrl = 'api/vessel/vessel.json';

    constructor(private _http: Http) { }

    getVessels(): Observable<IVessel[]> {
        return this._http.get(this._vesselUrl)
            .map((response: Response) => <IVessel[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getVessel(id: number): Observable<IVessel> {
        return this.getVessels()
            .map((vessels: IVessel[]) => vessels.find(p => p.Id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
