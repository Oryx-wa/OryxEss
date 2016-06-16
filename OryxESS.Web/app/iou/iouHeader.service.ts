import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IIouHeader } from './iouHeader';

@Injectable()
export class iouHeaderService {
    private _iouUrl = 'http://localhost:5500/api/iou/';

    constructor(private _http: Http) { }

    getIous(): Observable<IIouHeader[]> {
        return this._http.get(this._iouUrl)
            .map((response: Response) => <IIouHeader[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getIou(id: number): Observable<IIouHeader> {
        return this.getIous()
            .map((IIouHeader: IIouHeader[]) => IIouHeader.find(i => i.ID === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
