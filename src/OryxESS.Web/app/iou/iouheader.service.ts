﻿import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IIouHeader } from './iouHeader';
import { Configuration } from '../app.constants';
import { SecurityService } from '../services/security.service';

@Injectable()
export class iouHeaderService {
    
    private actionUrl: string;
    private headers: Headers;


    constructor(private _http: Http,private _configuration: Configuration, private _securityService: SecurityService) { 
        this.actionUrl = `${_configuration.apiServer}api/iou/`; 
    }

    private setHeaders() {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

        var token = this._securityService.GetToken();

        if (token !== "") {
            this.headers.append('Authorization', 'Bearer ' + token);
        }
    }

     public GetAll = (): Observable<IIouHeader[]> => {
        this.setHeaders();
        return this._http.get(this.actionUrl, {
            headers: this.headers
        }).map(res => res.json());
    }

    public GetById = (id: number): Observable<IIouHeader> => {
        this.setHeaders();
        return this._http.get(this.actionUrl + id, {
            headers: this.headers
        }).map(res => res.json());
    }

    public Add = (itemToAdd: any): Observable<Response> => {       
        this.setHeaders();
        return this._http.post(this.actionUrl, JSON.stringify(itemToAdd), { headers: this.headers });
    }

    public Update = (id: number, itemToUpdate: any): Observable<Response> => {
        this.setHeaders();
        return this._http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers });
    }

    public Delete = (id: number): Observable<Response> => {
        this.setHeaders();
        return this._http.delete(this.actionUrl + id, {
            headers: this.headers
        });
    }
    
}
