using OryxMCI.Entities;
using System;

namespace OryxMCI.Entities
{
    public class MCIData : IEntityBase
    {
        public int Id { get; set; }
        public int MCINumber { get; set; }
        public int PortId { get; set; }
        public string Port { get; set; }
        public int VesselId { get; set; }
        public string VesselName { get; set; }
        public int GrossTonnage { get; set; }
        public int CargoTonnage { get; set; }
        public int CargoOut { get; set; }
        public int AgentId { get; set; }
        public string Agent { get; set; }
        public DateTime DateInspected { get; set; }
        public string WasteCollectionNoteYear { get; set; }
        public string WasteCollectionNoteNo { get; set; }
        public string WasteCollectionNote { get; set; }
        public int WasteTransferNoteOil { get; set; }
        public string WasteTransferNoteGarbage { get; set; }
        public bool Waste { get; set; }
        public string Type { get; set; }
        public bool Archive { get; set; }
        public string NEXTWTNNO { get; set; }
        public int InspectorId { get; set; }
        public string Inspector { get; set; }
        public string MissingReason { get; set; }
        public string Notes { get; set; }
        public string GarbageQty { get; set; }
        public string OilQty { get; set; }
        public string Processed { get; set; }
    }
}