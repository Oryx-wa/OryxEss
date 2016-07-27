import {IModelBase, IPaging, Paging} from '../../shared/imodel-base'

export class Berth implements IModelBase {
    id:number;
    code: string;
    name: string;
    userSign: number;   

}