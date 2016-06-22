import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public apiServer: string = "http://localhost:5300/";
    public idServer: string = "http://localhost:5000/";
}