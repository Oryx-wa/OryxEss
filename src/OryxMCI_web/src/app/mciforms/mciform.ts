import {IModelBase} from '../shared/imodel-base';

export interface IMciForm extends IModelBase{
    id: number;
    mciNumber : number;
    port : string; 
    grossTonnage : number;
    cargoTonnage : number;
    cargoOut : number;
    userSign: number; 
}

export class MciForm  {
    
    id: number;
    mciNumber : number;
    port : string; 
    grossTonnage : number;
    cargoTonnage : number;
    cargoOut : number;
    userSign: number; 
    
  }