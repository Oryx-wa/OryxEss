import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IModelBase } from './imodel-base';
import { Configuration } from '../app.constants';
import { SecurityService } from '../login/security.service';

@Injectable()
export class ServiceBase {
    actionUrl: string;
    actionUrlPaged: string;
    headers: Headers;
    model: IModelBase;
    api: string;
    public totalRecordCount:number;
    public pageCount:number;
    private _useBackEnd: boolean;
    private _actionUrl: string;
    



    constructor(private _http: Http, private _configuration: Configuration,

        private _securityService: SecurityService) {
        this._useBackEnd = _configuration.useBackend;
        if (this._useBackEnd) {
            this._actionUrl = `${_configuration.apiServer}`;
        }
        else {
            this._actionUrl = `${_configuration.apiLocal}`;
        }


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

    public setActionUrl(action: string) {

        this.actionUrl = this._actionUrl + '/' + action + '/';
    }

    public setActionUrlPaged(action: string) {

        this.actionUrlPaged = this._actionUrl + '/' + action + '/';
    }

    public GetAll = (): Observable<IModelBase[]> => {
        this.setHeaders();
        if (this._useBackEnd) {
            return this._http.get(this.actionUrl, {
                headers: this.headers
            }).map(res => res.json());
        }
        else {
            return this._http.get(this.actionUrl, {

            }).map(res => res.json());
        }

    }

    public GetById = (id: number): Observable<IModelBase> => {
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

    public GetPage = (page:number, pageSize:number, orderBy:string): Observable<IModelBase[]> => {
        this.setHeaders();
        if (this._useBackEnd) {
             let params: URLSearchParams = new URLSearchParams();
            params.set('pageNo', page.toString() );
            params.set('pageSize', pageSize.toString());
            params.set('orderBy', orderBy);

            return this._http.get(this.actionUrl , {
                headers: this.headers,
                search:params

            }).do((res:any ) => {
                this.pageCount = res.json().paging.pageCount;   
                this.totalRecordCount = res.json().paging.totalRecordCount;
                 
                console.log(this.pageCount);   
            })
            .map(res => res.json().data);
            
            
        }
        else {
           
            return this._http.get(this.actionUrlPaged, {

            }).map(res => res.json());
        }

    }

    public GetPageCount ():number  {return this.pageCount;}
    public GetRecordCount ():number {return this.totalRecordCount}

    public HandleError(error: any) {
        this._securityService.HandleError(error)
    }

}
