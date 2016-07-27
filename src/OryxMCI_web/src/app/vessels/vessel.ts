export interface IVessel {
    id: number;
    code: string;
    name: string;  
    userSign:number; 
}

export class Vessel {
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public userSign: number
  
  ) {  }
}