import {IModelBase} from '../shared/imodel-base';
export interface IVessel extends IModelBase{
    id: number;
    code: string;
    name: string;  
    userSign:number; 
}

export class Vessel {
 
     id: number;
     code: string;
     name: string;
    userSign: number;
  
  
}