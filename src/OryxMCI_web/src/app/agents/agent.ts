import {IModelBase} from '../shared/imodel-base';
export interface IAgent {
    id: number;
    code: string;
    name: string;  
    userSign:number; 
}

export class Agent {

    public id: number;
    public code: string;
    public name: string;
    public userSign: number;

}