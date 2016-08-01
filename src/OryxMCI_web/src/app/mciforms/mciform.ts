export interface IMciForm {
    Id: number;
    MciNumber : number;
    Port : string; 
     GrossTonnage : number;
    CargoTonnage : number;
    CargoOut : number;
    userSign: number; 
}

export class MciForm {
  constructor(
    public Id: number,
    public  MciNumber : number,
    public Port : string,
    public GrossTonnage : number,
     public CargoTonnage : number,
      public CargoOut : number,
     public userSign: number
  
  ) {  }
}