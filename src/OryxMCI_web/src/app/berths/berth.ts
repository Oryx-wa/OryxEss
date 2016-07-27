export interface IBerth {
    id: number;
    code: string;
    name: string;  
    userSign:number; 
}

export class Berth {
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public userSign: number
  
  ) {  }
}