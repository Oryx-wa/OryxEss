import {IModelBase} from '../shared/imodel-base';
export interface IInspector {
    id: number;
    code: string;
    name: string;  
    current: string,
    userSign:number; 
}

export class Inspector {
 
    public id: number;
    public code: string;
    public name: string;
    public current: string;
    public userSign: number
  

}