import {IModelBase, IPaging, Paging} from '../../shared/imodel-base'

export class MciForm implements IModelBase {
    Id: number;
    MciNumber : number;
    Port : string; 
     GrossTonnage : number;
    CargoTonnage : number;
    CargoOut : number;
    userSign: number; 

}