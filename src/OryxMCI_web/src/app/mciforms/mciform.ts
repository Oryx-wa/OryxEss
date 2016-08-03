import {IModelBase} from '../shared/imodel-base';

export interface IMciForm extends IModelBase{
    id: number;    
    mciId :number;
    mciNumber : number;
    portId  : number;
    port  : string;
    vesselId  : number;
    vesselName  : string;
    grossTonnage  : number;
    cargoTonnage  : number;
    cargoOut  : number;
    agentId  : number;
    agent  : string;
    dateInspected : Date;
    wasteCollectionNoteYear  : number;
    wasteCollectionNoteNo  : number;
    wasteCollectionNote  : string;
    wasteTransferNoteOil  : number;
    wasteTransferNoteGarbage  : number;
    waste  : boolean;
    type  : string;
    archive  : boolean;
    nextwtnno  : number;
    inspectorId  : number;
    inspector  : string;
    missingReason  : string;
    notes  : string;
    garbageQty  : number;
    oilQty  : number;
    processed  : number;    
    userSign: number; 
}

export class MciForm  {
    id: number;    
    mciId :number;
    mciNumber : number;
    portId  : number;
    port  : string;
    vesselId  : number;
    vesselName  : string;
    grossTonnage  : number;
    cargoTonnage  : number;
    cargoOut  : number;
    agentId  : number;
    agent  : string;
    dateInspected : Date;
    wasteCollectionNoteYear  : number;
    wasteCollectionNoteNo  : number;
    wasteCollectionNote  : string;
    wasteTransferNoteOil  : number;
    wasteTransferNoteGarbage  : number;
    waste  : boolean;
    type  : string;
    archive  : boolean;
    nextwtnno  : number;
    inspectorId  : number;
    inspector  : string;
    missingReason  : string;
    notes  : string;
    garbageQty  : number;
    oilQty  : number;
    processed  : number;    
    userSign: number; 
  }