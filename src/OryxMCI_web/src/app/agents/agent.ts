export interface IAgent {
    Id: number;
    Code: string;
    Name: string;   
}

export class Agent {
  constructor(
    public id: number,
    public code: string,
    public name: string
  
  ) {  }
}