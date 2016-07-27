export interface IInspector {
    id: number;
    code: string;
    name: string;  
    current: string,
    userSign:number; 
}

export class Inspector {
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public current: string,
    public userSign: number
  
  ) {  }
}