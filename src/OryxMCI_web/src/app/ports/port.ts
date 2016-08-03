import {IModelBase} from '../shared/imodel-base';
export interface IPort extends IModelBase {
    id: number;
    code: string;
    name: string;  
    userSign:number; 
}

export class Port {
  
    public id: number;
    public code: string;
    public name: string;
    public userSign: number;
  
 
}