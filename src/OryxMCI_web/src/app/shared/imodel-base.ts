export interface IModelBase  {
    userSign:number;
    

}

export interface IPaging {
    total: number;
    limit: number;
    offset: number;
    returned: number;
}

export class Paging implements IPaging{
    total: number;
    limit: number;
    offset: number;
    returned: number;
}

