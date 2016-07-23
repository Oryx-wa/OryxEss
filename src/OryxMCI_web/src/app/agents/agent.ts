export interface IAgent {
    id: number;
    code: string;
    name: string;  
    userSign:number; 
}

export class Agent {
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public userSign: number
  
  ) {  }
}