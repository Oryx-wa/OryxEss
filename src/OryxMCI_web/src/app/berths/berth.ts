import {IModelBase} from '../shared/imodel-base';
export interface IBerth extends IModelBase {
    id: number;
    code: string;
    name: string;  
    userSign:number; 
}

export class Berth {

    public id: number;
    public code: string;
    public name: string;
    public userSign: number;

}