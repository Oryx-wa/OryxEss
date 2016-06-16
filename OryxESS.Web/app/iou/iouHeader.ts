/*Defines the iouHeader Interface */
export interface IIouHeader {
       ID: number;
       DocDate: Date;
       DueDate: Date;
       Status: string;
       RequestAmount: number;
       EmployeeID: number;
       ProjectCode: string;
       SiteCode: string;
       Comments: string;    
}

