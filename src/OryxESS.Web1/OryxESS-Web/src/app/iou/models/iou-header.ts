/*Defines the iouHeader Interface */
import { IouPayment } from './iou-payment';
import { IouStatus } from './iou-status';
import {IModelBase} from '../../shared/imodel-base'

export class IouHeader implements IModelBase {
       iouId: number;
       docDate: Date;
       dueDate: Date;
       status: string;
       requestAmount: number;
       employeeID: number;
       projectCode: string;
       siteCode: string;
       comments: string;
       iouPayments: IouPayment; 
       iouStatus: IouStatus;
       userSign:number;   
}

