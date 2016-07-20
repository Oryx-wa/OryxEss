using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using OryxMCI.Data;

namespace OryxMCI.Data.Migrations
{
    [DbContext(typeof(OryxMCIContext))]
    [Migration("20160719194211_OryxMCI")]
    partial class OryxMCI
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("OryxMCI.Entities.DefItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired();

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.HasKey("Id");

                    b.HasAlternateKey("Code");

                    b.ToTable("DefItem");

                    b.HasDiscriminator<string>("Discriminator").HasValue("DefItem");
                });

            modelBuilder.Entity("OryxMCI.Entities.MCIAudit", b =>
                {
                    b.Property<int>("AuditId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Action")
                        .HasAnnotation("MaxLength", 30);

                    b.Property<string>("Code")
                        .IsRequired();

                    b.Property<DateTime>("CreateDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<DateTime>("Date")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("getDate()");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.Property<DateTime>("UpdateDate");

                    b.Property<string>("User")
                        .HasAnnotation("MaxLength", 30);

                    b.Property<int>("UserSign");

                    b.Property<string>("Val")
                        .HasAnnotation("MaxLength", 30);

                    b.HasKey("AuditId");

                    b.HasAlternateKey("Code");

                    b.ToTable("MCIAudit");
                });

            modelBuilder.Entity("OryxMCI.Entities.MCIData", b =>
                {
                    b.Property<int>("MCIId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Agent")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.Property<int>("AgentId");

                    b.Property<bool>("Archive");

                    b.Property<int>("CargoOut");

                    b.Property<int>("CargoTonnage");

                    b.Property<DateTime>("CreateDate");

                    b.Property<DateTime>("DateInspected");

                    b.Property<string>("GarbageQty")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<int>("GrossTonnage");

                    b.Property<string>("Inspector")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.Property<int>("InspectorId");

                    b.Property<int>("MCINumber");

                    b.Property<string>("MissingReason")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 255);

                    b.Property<string>("NEXTWTNNO")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Notes")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 255);

                    b.Property<string>("OilQty")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Port")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.Property<int>("PortId");

                    b.Property<string>("Processed")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 1);

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<DateTime>("UpdateDate");

                    b.Property<int>("UserSign");

                    b.Property<int>("VesselId");

                    b.Property<string>("VesselName")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.Property<bool>("Waste");

                    b.Property<string>("WasteCollectionNote")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 255);

                    b.Property<string>("WasteCollectionNoteNo")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("WasteCollectionNoteYear")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 4);

                    b.Property<string>("WasteTransferNoteGarbage")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 255);

                    b.Property<int>("WasteTransferNoteOil");

                    b.HasKey("MCIId");

                    b.ToTable("MCIData");
                });

            modelBuilder.Entity("OryxMCI.Entities.Agent", b =>
                {
                    b.HasBaseType("OryxMCI.Entities.DefItem");


                    b.ToTable("Agent");

                    b.HasDiscriminator().HasValue("Agent");
                });

            modelBuilder.Entity("OryxMCI.Entities.Berth", b =>
                {
                    b.HasBaseType("OryxMCI.Entities.DefItem");


                    b.ToTable("Berth");

                    b.HasDiscriminator().HasValue("Berth");
                });

            modelBuilder.Entity("OryxMCI.Entities.Inspector", b =>
                {
                    b.HasBaseType("OryxMCI.Entities.DefItem");

                    b.Property<bool>("Current");

                    b.ToTable("Inspector");

                    b.HasDiscriminator().HasValue("Inspector");
                });

            modelBuilder.Entity("OryxMCI.Entities.Port", b =>
                {
                    b.HasBaseType("OryxMCI.Entities.DefItem");


                    b.ToTable("Port");

                    b.HasDiscriminator().HasValue("Port");
                });

            modelBuilder.Entity("OryxMCI.Entities.Vessel", b =>
                {
                    b.HasBaseType("OryxMCI.Entities.DefItem");


                    b.ToTable("Vessel");

                    b.HasDiscriminator().HasValue("Vessel");
                });
        }
    }
}
