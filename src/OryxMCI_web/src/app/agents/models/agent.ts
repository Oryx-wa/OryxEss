import {IModelBase, IPaging, Paging} from '../../shared/imodel-base'

export class Agent implements IModelBase {
    id:number;
    code: string;
    name: string;
    userSign: number;   

}