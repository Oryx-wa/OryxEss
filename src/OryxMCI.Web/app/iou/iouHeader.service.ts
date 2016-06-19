import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";
import { IIouHeader } from './iouHeader';

@Injectable()
export class iouHeaderService {
    @LocalStorage() private appurl = "http://localhost:5300/api";
    private _iouUrl = "/iou";
    


    constructor(private _http: Http) { }

    getIous(): Observable<IIouHeader[]> {
        var reqHeaders = new  Headers();
        reqHeaders.append("Authorization", "bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNyc2Etc2hhMjU2Iiwia2lkIjoiNkI3QUNDNTIwMzA1QkZEQjRGNzI1MkRBRUIyMTc3Q0MwOTFGQUFFMSIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE0NjYyNjgzMTMsImV4cCI6MTQ2NjI3MTkxMywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Jlc291cmNlcyIsImNsaWVudF9pZCI6Ik9yeXhFU1Mud2ViYXBpIiwic2NvcGUiOiJPcnl4RVNTLndlYmFwaSIsInN1YiI6IjI4MTNkZjM2LTM3NTMtNDg1NC05YzExLTU5OGQ1ZDlhYWFlMCIsImF1dGhfdGltZSI6MTQ2NjI2ODMxMywiaWRwIjoiaWRzcnYiLCJhbXIiOlsicGFzc3dvcmQiXX0.bkt2nsEeX0PUic_WnhlFB7GKcxfH0ZoHdjPwr7I79pANkWE_JXswO9xeemtsGSBNMGp7V_hAQYmsXtwAxqvakqs778Tr8ZAdhG7NDIouLc41fjJv6_sgobx7BCC8AwzL1_WLlcp8fUIm7dB_Juz3QeL6Y8E6YGbklf2wBnfJXus-VhS8aEpP335-OSEwP0YFx7Brd-1LzJpKe7uHJybdY31-5L5VzMJxy9_Y0ujkLfGhdtkt-Zh2cqJO6LaWU6gGtr5SMj2rFj-UZCf5b9M6rky-BSCv3P5wPF3vlAqYAseZwNkaCJPuxU6tY3sY196c6BVC4BcYm98hcg_n9pUq_g");
        
        var options = new RequestOptions({
            method: RequestMethod.Get,
            url: this.appurl +this._iouUrl,
            headers: reqHeaders
        });

        return this._http.get( this.appurl +this._iouUrl,options)
            .map((response: Response) => <IIouHeader[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getIou(id: number): Observable<IIouHeader> {
        return this.getIous()
            .map((IIouHeader: IIouHeader[]) => IIouHeader.find(i => i.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
