/*Defines the iouHeader Interface */
export interface IIouHeader {
       id: number;
       docDate: Date;
       dueDate: Date;
       status: string;
       requestAmount: number;
       employeeID: number;
       projectCode: string;
       siteCode: string;
       comments: string;    
}

