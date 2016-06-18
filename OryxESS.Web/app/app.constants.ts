import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public apiServer: string = "https://localhost:5300/";
    public idServer: string = "https://localhost:5000/";
}