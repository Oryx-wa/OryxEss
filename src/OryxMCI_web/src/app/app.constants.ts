import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public apiServer: string = "http://localhost:5500/api";
    public idServer: string = "http://localhost:5000/";
    public returnUrl: string= "http://localhost:4200/"
}