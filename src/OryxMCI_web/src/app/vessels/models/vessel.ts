import {IModelBase, IPaging, Paging} from '../../shared/imodel-base'

export class Vessel implements IModelBase {
    id:number;
    code: string;
    name: string;
    userSign: number;   

}