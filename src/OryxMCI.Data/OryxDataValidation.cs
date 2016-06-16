using Microsoft.EntityFrameworkCore;
using OryxMCI.Entities;
using System;

namespace OryxMCI.Data
{
    public class OryxDataValidation
    {
        public static void ModelConfiguration(ref ModelBuilder builder)
        {
            // Agent
            builder.Entity<Agent>().HasKey(m => m.Id);
            builder.Entity<Agent>().Property(m => m.Code).IsRequired().HasMaxLength(10);
            builder.Entity<Agent>().Property(m => m.Name).IsRequired().HasMaxLength(100);

            // Inspector
            builder.Entity<Inspector>().HasKey(m => m.Id);
            builder.Entity<Inspector>().Property(m => m.Code).IsRequired().HasMaxLength(10);
            builder.Entity<Inspector>().Property(m => m.Name).IsRequired().HasMaxLength(100);

            // Berth
            builder.Entity<Berth>().HasKey(m => m.Id);
            builder.Entity<Berth>().Property(m => m.Code).IsRequired().HasMaxLength(10);
            builder.Entity<Berth>().Property(m => m.Name).IsRequired().HasMaxLength(100);

            // Port
            builder.Entity<Port>().HasKey(m => m.Id);
            builder.Entity<Port>().Property(m => m.Code).IsRequired().HasMaxLength(10);
            builder.Entity<Port>().Property(m => m.Name).IsRequired().HasMaxLength(100);

            // Vessel
            builder.Entity<Vessel>().HasKey(m => m.Id);
            builder.Entity<Vessel>().Property(m => m.Code).IsRequired().HasMaxLength(10);
            builder.Entity<Vessel>().Property(m => m.Name).IsRequired().HasMaxLength(100);

            // MCIData
            builder.Entity<MCIData>().HasKey(m => m.Id);
            builder.Entity<MCIData>().Property(m => m.MCINumber).IsRequired();
            builder.Entity<MCIData>().Property(m => m.PortId).IsRequired();
            builder.Entity<MCIData>().Property(m => m.Port).IsRequired().HasMaxLength(100);
            builder.Entity<MCIData>().Property(m => m.VesselId).IsRequired();
            builder.Entity<MCIData>().Property(m => m.VesselName).IsRequired().HasMaxLength(100);
            builder.Entity<MCIData>().Property(m => m.GrossTonnage).IsRequired();
            builder.Entity<MCIData>().Property(m => m.CargoTonnage).IsRequired();
            builder.Entity<MCIData>().Property(m => m.CargoOut).IsRequired();
            builder.Entity<MCIData>().Property(m => m.AgentId).IsRequired();
            builder.Entity<MCIData>().Property(m => m.Agent).IsRequired().HasMaxLength(100);
            builder.Entity<MCIData>().Property(m => m.WasteCollectionNoteYear).IsRequired().HasMaxLength(4);
            builder.Entity<MCIData>().Property(m => m.WasteCollectionNoteNo).IsRequired().HasMaxLength(20);
            builder.Entity<MCIData>().Property(m => m.WasteCollectionNote).IsRequired().HasMaxLength(255);
            builder.Entity<MCIData>().Property(m => m.WasteTransferNoteOil).IsRequired();
            builder.Entity<MCIData>().Property(m => m.WasteTransferNoteGarbage).IsRequired().HasMaxLength(255);
            builder.Entity<MCIData>().Property(m => m.Waste).IsRequired();
            builder.Entity<MCIData>().Property(m => m.Type).IsRequired().HasMaxLength(20);
            builder.Entity<MCIData>().Property(m => m.Archive).IsRequired();
            builder.Entity<MCIData>().Property(m => m.NEXTWTNNO).IsRequired().HasMaxLength(20);
            builder.Entity<MCIData>().Property(m => m.InspectorId).IsRequired();
            builder.Entity<MCIData>().Property(m => m.Inspector).IsRequired().HasMaxLength(100);
            builder.Entity<MCIData>().Property(m => m.MissingReason).IsRequired().HasMaxLength(255);
            builder.Entity<MCIData>().Property(m => m.Notes).IsRequired().HasMaxLength(255);
            builder.Entity<MCIData>().Property(m => m.GarbageQty).IsRequired().HasMaxLength(20);
            builder.Entity<MCIData>().Property(m => m.OilQty).IsRequired().HasMaxLength(20);
            builder.Entity<MCIData>().Property(m => m.Processed).IsRequired().HasMaxLength(1);
        }
    }
}