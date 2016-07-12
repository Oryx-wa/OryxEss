using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace OryxMCI.Data.Migrations
{
    public partial class OryxMCI : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DefItemSet",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    Discriminator = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 100, nullable: false),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false),
                    Current = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DefItemSet", x => x.Id);
                    table.UniqueConstraint("AK_DefItemSet_Code", x => x.Code);
                });

            migrationBuilder.CreateTable(
                name: "MCIAuditSet",
                columns: table => new
                {
                    AuditId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Action = table.Column<string>(maxLength: 30, nullable: true),
                    Code = table.Column<string>(nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    Date = table.Column<DateTime>(nullable: false, defaultValueSql: "getDate()"),
                    Name = table.Column<string>(maxLength: 100, nullable: false),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    User = table.Column<string>(maxLength: 30, nullable: true),
                    UserSign = table.Column<int>(nullable: false),
                    Val = table.Column<string>(maxLength: 30, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MCIAuditSet", x => x.AuditId);
                    table.UniqueConstraint("AK_MCIAuditSet_Code", x => x.Code);
                });

            migrationBuilder.CreateTable(
                name: "MCIDataSet",
                columns: table => new
                {
                    MCIId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Agent = table.Column<string>(maxLength: 100, nullable: false),
                    AgentId = table.Column<int>(nullable: false),
                    Archive = table.Column<bool>(nullable: false),
                    CargoOut = table.Column<int>(nullable: false),
                    CargoTonnage = table.Column<int>(nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false),
                    DateInspected = table.Column<DateTime>(nullable: false),
                    GarbageQty = table.Column<string>(maxLength: 20, nullable: false),
                    GrossTonnage = table.Column<int>(nullable: false),
                    Inspector = table.Column<string>(maxLength: 100, nullable: false),
                    InspectorId = table.Column<int>(nullable: false),
                    MCINumber = table.Column<int>(nullable: false),
                    MissingReason = table.Column<string>(maxLength: 255, nullable: false),
                    NEXTWTNNO = table.Column<string>(maxLength: 20, nullable: false),
                    Notes = table.Column<string>(maxLength: 255, nullable: false),
                    OilQty = table.Column<string>(maxLength: 20, nullable: false),
                    Port = table.Column<string>(maxLength: 100, nullable: false),
                    PortId = table.Column<int>(nullable: false),
                    Processed = table.Column<string>(maxLength: 1, nullable: false),
                    Type = table.Column<string>(maxLength: 20, nullable: false),
                    UpdateDate = table.Column<DateTime>(nullable: false),
                    UserSign = table.Column<int>(nullable: false),
                    VesselId = table.Column<int>(nullable: false),
                    VesselName = table.Column<string>(maxLength: 100, nullable: false),
                    Waste = table.Column<bool>(nullable: false),
                    WasteCollectionNote = table.Column<string>(maxLength: 255, nullable: false),
                    WasteCollectionNoteNo = table.Column<string>(maxLength: 20, nullable: false),
                    WasteCollectionNoteYear = table.Column<string>(maxLength: 4, nullable: false),
                    WasteTransferNoteGarbage = table.Column<string>(maxLength: 255, nullable: false),
                    WasteTransferNoteOil = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MCIDataSet", x => x.MCIId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DefItemSet");

            migrationBuilder.DropTable(
                name: "MCIAuditSet");

            migrationBuilder.DropTable(
                name: "MCIDataSet");
        }
    }
}
