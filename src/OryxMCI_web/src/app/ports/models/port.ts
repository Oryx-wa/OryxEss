import {IModelBase, IPaging, Paging} from '../../shared/imodel-base'

export class Port implements IModelBase {
    id:number;
    code: string;
    name: string;
    userSign: number;   

}