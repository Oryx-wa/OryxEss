using Microsoft.EntityFrameworkCore;
using OryxMCI.Entities;
using System;

namespace OryxMCI.Data.Configuration
{
    public class OryxDataValidation
    {
        public static void ModelConfiguration(ref ModelBuilder builder)
        {
            //Defitem
            builder.Entity<DefItem>().HasAlternateKey(m => m.Code);
            builder.Entity<DefItem>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");

            //Audit
            builder.Entity<MCIAudit>().HasAlternateKey(m => m.Code);
            builder.Entity<MCIAudit>().Property(m => m.Date).HasDefaultValueSql("getDate()");
            builder.Entity<MCIAudit>().Property(m => m.CreateDate).HasDefaultValueSql("getDate()");

            // MCIData
            builder.Entity<MCIData>().HasKey(m => m.MCIId);
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