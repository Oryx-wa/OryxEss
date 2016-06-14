using OryxMCI.Entities;
using System;
using System.ComponentModel.DataAnnotations;

namespace OryxMCI.webapi.ViewModels
{
    public class MCIDataViewModel
    {
        public int Id { get; set; }

        [Required]
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

        [StringLength(255, MinimumLength = 5)]
        public string Notes { get; set; }

        [StringLength(50, MinimumLength = 5)]
        public string GarbageQty { get; set; }

        [StringLength(50, MinimumLength = 5)]
        public string OilQty { get; set; }

        [StringLength(1, MinimumLength = 1)]
        public string Processed { get; set; }

        public static MCIDataViewModel FromEntity(MCIData entity)
        {
            return new MCIDataViewModel
            {
                Id = entity.Id,
                MCINumber = entity.MCINumber,
                PortId = entity.PortId,
                Port = entity.Port,
                VesselId = entity.VesselId,
                VesselName = entity.VesselName,
                GrossTonnage = entity.GrossTonnage,
                CargoTonnage = entity.CargoTonnage,
                CargoOut = entity.CargoOut,
                AgentId = entity.AgentId,
                Agent = entity.Agent,
                DateInspected = entity.DateInspected,
            };
        }

        public MCIData ToEntity()
        {
            return new MCIData
            {
                Code = Code,
                Id = Id,
                Name = Name
            };
        }
    }
}