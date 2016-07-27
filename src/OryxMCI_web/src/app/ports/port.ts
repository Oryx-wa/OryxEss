export interface IPort {
    id: number;
    code: string;
    name: string;  
    userSign:number; 
}

export class Port {
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public userSign: number
  
  ) {  }
}